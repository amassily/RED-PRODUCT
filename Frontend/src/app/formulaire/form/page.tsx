"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Background,
  Title,
  Container,
  FormRow,
  Label,
  Input,
  Select,
  Button,
  InputImage,
  UploadLabel,
  HiddenInput,
} from "@/app/styles/formulaire";

export default function Formulaire() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nom: "",
    adresse: "",
    email: "",
    phone: "",
    prix: "",
    devise: "XOF",
    imageUrl: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let imageUrl = formData.imageUrl;

    if (image) {
      const formDataImage = new FormData();
      formDataImage.append("file", image);
      formDataImage.append("upload_preset", "mon_preset_cloudinary"); 
    }
    

    try {
      const response = await fetch("http://localhost:5000/api/hotels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData,imageUrl}),
      });

      if (response.ok) {
        throw new Error(" ");
      }

      // Récupérer le nombre actuel d'hôtels
      let hotelCount = parseInt(localStorage.getItem("hotelCount") || "8", 10);
      hotelCount += 1;
      localStorage.setItem("hotelCount", hotelCount.toString());

      // Rediriger vers le dashboard
      router.push("/dashboard/Hotel");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Background />
      <Container>
        <Title>Créer un nouveau Hôtel</Title>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <FormRow>
            <Label htmlFor="nom">Nom de l'Hôtel</Label>
            <Input id="nom" type="text" placeholder="Nom de l'Hôtel" value={formData.nom} onChange={handleChange} required />
          </FormRow>
          <FormRow>
            <Label htmlFor="adresse">Adresse</Label>
            <Input id="adresse" type="text" placeholder="Adresse" value={formData.adresse} onChange={handleChange} required />
          </FormRow>
          <FormRow>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
          </FormRow>
          <FormRow>
            <Label htmlFor="phone">Numéro de téléphone</Label>
            <Input id="phone" type="tel" placeholder="Téléphone" value={formData.phone} onChange={handleChange} required />
          </FormRow>
          <FormRow>
            <Label htmlFor="prix">Prix par nuit</Label>
            <Input id="prix" type="number" placeholder="Prix" value={formData.prix} onChange={handleChange} required />
          </FormRow>
          <FormRow>
            <Label htmlFor="devise">Devise</Label>
            <Select id="devise" value={formData.devise} onChange={handleChange}>
              <option value="XOF">Franc CFA</option>
              <option value="USD">Dollars</option>
              <option value="JPY">Yen</option>
            </Select>
          </FormRow>
          <FormRow style={{ flexDirection: "column", alignItems: "center" }}>
            <InputImage>
            <UploadLabel htmlFor="fileInput">Choisir une image</UploadLabel>
              <HiddenInput id="fileInput" type="file" accept="image/*" />
            </InputImage>
          </FormRow>
          <Button type="submit">Enregistrer</Button>
        </form>
      </Container>
    </>
  );
}
