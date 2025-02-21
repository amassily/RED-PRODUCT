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

export default function Inscription() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNew = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null); 
    setIsSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/api/users/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
  
      const data = await res.json();
      console.log("Réponse serveur:", data);
  
      if (res.ok) {
        alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
        router.push("/"); 
      } else {
        alert(data.message || "Erreur lors de l'inscription.");
      }
    } 
    catch (error) {
      console.error("Erreur serveur:", error);
      setErrorMessage("Erreur lors de l'inscription.");
    } 
    finally {
      setIsSubmitting(false);
    };
  }
  return (
    <>
      <Background />
      <TitleContainer>
        <Img src="/images/SVG.png" alt="Red Product" />
        <Title style={{ color: "white" }}>RED PRODUCT</Title>
      </TitleContainer>
      <Container>
        <form onSubmit={handleNew as any}>
          <Input
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{ margin: "1rem" }}>
            <input type="checkbox" name="remember" id="remember" required />
            <label htmlFor="remember" style={{ color: "black", margin: "0.5rem" }}>
              J'accepte les termes et politiques
            </label>
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Incription en cour..." : "S'inscrire"}
          </Button>
        </form>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </Container>
      <ForgotLink>
        <p>
          Vous avez déjà un compte ? <Link href="/">Se connecter</Link>
        </p>
      </ForgotLink>
    </>
  );
}
