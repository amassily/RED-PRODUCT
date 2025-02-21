"use client";
import React from "react";
import { Search, Bell, User, LogOut,Mail, Users,  } from "lucide-react";
import Link from "next/link";
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
  RightSection,
  NavContainer,
  NavBar,
  NavTitle,
  Icons,
  NavSeparator,
  TitleBar,
  Title,
  Content,
  LinksGrid,
  Rectangle,
  StatusIndicator,
} from "@/app/styles/dash";

export default function Menu() {
  const userName = " Votre nom"; 

  return (
    <>
    <DashboardContainer>
      <LeftSection>
        <LeftHeader>
          <Logo src="/images/SVG.png" alt="Red product" />
          <DashboardTitle>RED product</DashboardTitle>
        </LeftHeader>
        <MenuLink>
          <BarLink>
            <Link href="/dashboard/Menu"><p>Dashboard</p></Link>
          </BarLink>  
            <Link href="/dashboard/Hotel"><p style={{ textAlign: 'center' }}>Hotels</p></Link>
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
            <NavTitle>
              
            </NavTitle>
            <Icons>
              <Search size={18} />
              <Bell size={18} />
              <User size={18} />
              <LogOut size={18} />
            </Icons>
          </NavBar>
          <NavSeparator />
          <TitleBar>
            <Title>Dashboard</Title>
          </TitleBar>
        </NavContainer>

        <Content>
        <LinksGrid>
  <Rectangle>
  <Link href="/dashboard/hotel">
    <Mail size={30} color="#100" />
    <p>125 formulaires</p>
  </Link>
  </Rectangle>
  <Rectangle>
  <Link href="/dashboard/restaurant">
    <Mail size={30} color="#111"  />
    <p>40 messages</p>
  </Link>
  </Rectangle>
  <Rectangle>
  <Link href="/dashboard/activite">
    <Users size={30} color="#100" />
    <p>600 utilisateurs</p>
  </Link>
  </Rectangle>
  <Rectangle>
  <Link href="/dashboard/transport">
    <Mail size={30} color="#100" />
    <p>25 e-mails</p>
  </Link>
  </Rectangle>
  <Rectangle>
  <Link href="/dashboard/avis">
    <Mail size={30} color="#100" border-Radius="circle" />
    <p>40 Hotel</p>
  </Link>
  </Rectangle>
  <Rectangle>
  <Link href="/dashboard/parametre">
    <User size={30} color="#100" />
    <p>02 Entrées</p>
  </Link>
  </Rectangle>
</LinksGrid>        

  </Content>
      </RightSection>
</DashboardContainer>
</>
  );
}
