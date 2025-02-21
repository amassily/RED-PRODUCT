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

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Début de la connexion", { email, password });

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Réponse serveur:", data);

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push("/dashboard/Menu"); // Redirige vers le menu après connexion réussie
      } else {
        alert(data.message || "Erreur de connexion");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue");
    }
  };

  return (
    <>
      <Background />
      <TitleContainer>
        <Img src="/images/SVG.png" alt="Red Product" />
        <Title>RED PRODUCT</Title>
      </TitleContainer>
      <Container>
        <form onSubmit={handleSubmit}>
          <Input type="email" placeholder="E-mail" value={email} onChange={handleChangeEmail}  required/>
          <Input type="password" placeholder="Mot de passe" value={password} onChange={handleChangePassword} required/>
          <div style={{ margin: "1rem" }}>
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember" style={{ color: "black", marginLeft: "0.5rem" }}>
              Gardez-moi connecté
            </label>
          </div>
          <Button type="submit">Se connecter</Button>
        </form>
      </Container>
      <ForgotLink>
        <p>
          <Link href="/connexion/forgotPassword">Mot de passe oublié ?</Link>
        </p>
        <p>
          Vous n'avez pas de compte ?{" "}
          <Link href="/connexion/inscription">S'inscrire</Link>
        </p>
      </ForgotLink>
    </>
  );
}
