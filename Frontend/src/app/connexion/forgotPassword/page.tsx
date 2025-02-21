"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Background,
  TitleContainer,
  Img,
  Title,
  Container,
  Input,
  Button,
  ForgotLink,
  Link,
} from "@/app/styles/connexion";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulation d'un appel API pour la réinitialisation du mot de passe
    try {
      const res = await fetch("http://localhost:5000/api/users/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Un email de réinitialisation a été envoyé.");
      } else {
        setMessage(data.message || "Une erreur est survenue.");
      }
    } catch (error) {
      setMessage("Erreur de connexion. Veuillez réessayer.");
    }
  };

  return (
    <>
      <Background />
      <TitleContainer>
        <Img src="/images/SVG.png" alt="Red Product" />
        <Title style={{ color: "white" }}>RED PRODUCT</Title>
      </TitleContainer>

      <Container style={{ color: "black" }}>
        <h4>Mot de passe oublié</h4>
        <h5>Veuillez entrer votre adresse e-mail pour recevoir un lien de réinitialisation.</h5>

        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Envoyer</Button>
        </form>

        {message && <p style={{ color: "red", marginTop: "10px" }}>{message}</p>}
      </Container>

      <ForgotLink>
        <p>
          Retour à la <Link href="/">Connexion</Link>
        </p>
      </ForgotLink>
    </>
  );
}
