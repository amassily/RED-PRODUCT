"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Search, Bell, User, LogOut } from "lucide-react";

import {
  DashboardContainer,
  LeftSection,
  LeftHeader,
  MenuLink,
  BarLink,
  Logo,
  DashboardTitle,
  ProfileContainer,
  ProfileImage,
  ProfileName,
  StatusIndicator,
  RightSection,
  NavContainer,
  NavBar,
  NavTitle,
  Icons,
  NavSeparator,
  TitleBar,
  Title,
  ButtonHotel,
  Content,
  LinksGridImage,
} from "@/app/styles/dash";

export default function Hotel() {
  const [hotelCount, setHotelCount] = useState(0);
  const [userName, setUserName] = useState("Votre Nom");
  const [hotels, setHotels] = useState<{ _id: string; imageUrl: string; name: string }[]>([]);
  const router = useRouter();

  // Fonction de récupération du nombre d'hôtels depuis le backend
  async function fetchHotelCount() {
    try {
      const res = await fetch("http://localhost:5000/api/hotels");
      const hotels = await res.json();
      setHotelCount(hotels.length);
    } catch (error) {
      console.error(" ", error);
    }
  }

  // Appeler fetchHotelCount au montage du composant
  useEffect(() => {
    // Charger le nombre d'hôtels depuis localStorage
    const count = parseInt(localStorage.getItem("hotelCount") || "8", 10);
    setHotelCount(count);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.name);
    
    }
  const fetchHotels = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/hotels");
      const data = await res.json();
      setHotels(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des hôtels :", error);
    }
  };

    fetchHotels();

  },
  []);
  return (


    <DashboardContainer>
      <LeftSection>
        <LeftHeader>
          <Logo src="/images/SVG.png" alt="Red product" />
          <DashboardTitle>RED product</DashboardTitle>
        </LeftHeader>
        <MenuLink>
          <Link href="/dashboard/Menu">
            <p style={{ textAlign: 'center' }}>Dashboard</p>
          </Link>
          <BarLink>
            <Link href="/dashboard/Hotel">
              <p>Hotels</p>
            </Link>
          </BarLink>
        </MenuLink>
        <ProfileContainer>
          <ProfileImage src="/images/profile.png" alt="Profil" />
          <ProfileName>
            {userName}
            <StatusIndicator />
          </ProfileName>
        </ProfileContainer>      
      </LeftSection>

      <RightSection>
        <NavContainer>
          <NavBar>
            <NavTitle></NavTitle>
            <Icons>
              <Search size={18} />
              <Bell size={18} />
              <User size={18} />
              <LogOut size={18} />
            </Icons>
          </NavBar>
          <NavSeparator />
          <TitleBar>
            <Title>HôTEL({hotelCount})</Title>
            <ButtonHotel
              type="button"
              onClick={() => router.push("/formulaire/form")}
            >
              Ajouter un Hôtel
            </ButtonHotel>
          </TitleBar>
        </NavContainer>

        <Content>
        <div>
      <h1>Liste des Hôtels</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {hotels.map((hotel) => (
          <div key={hotel._id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px" }}>
            <img src={hotel.imageUrl} alt={hotel.name} />
          </div>
        ))}
      </div>
    </div>
          <LinksGridImage>
            <Link href="/dashboard/hotel">
              <Image src="/images/hotel.png" alt="Hotel" width={200} height={100} />
            </Link>
            <Link href="/dashboard/restaurant">
              <Image src="/images/kfp.png" alt="Restaurant" width={200} height={100} />
            </Link>
            <Link href="/dashboard/activite">
              <Image src="/images/rbh.png" alt="Activité" width={200} height={100} />
            </Link>
            <Link href="/dashboard/transport">
              <Image src="/images/pull.png" alt="Transport" width={200} height={100} />
            </Link>
            <Link href="/dashboard/avis">
              <Image src="/images/lr.png" alt="Avis" width={200} height={100} />
            </Link>
            <Link href="/dashboard/parametre">
              <Image src="/images/saly.png" alt="Paramètre" width={200} height={100} />
            </Link>
            <Link href="/dashboard/parametre">
              <Image src="/images/saly.png" alt="Paramètre" width={200} height={100} />
            </Link>
            <Link href="/dashboard/parametre">
              <Image src="/images/saly.png" alt="Paramètre" width={200} height={100} />
            </Link>
          </LinksGridImage>
        </Content>
      </RightSection>
    </DashboardContainer>
  );
}
