import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
`;
export const LeftSection = styled.div`
  width: 25%;
  color: white;
  background-image: url("/images/bg.webp");
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
`;
export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding-top: 10px;
  align-items: center;
`;
export const MenuLink = styled.div`
  color: white;
  display: grid;
  align-items: center;
  justify-content: center;
  text-align:center;


`; 
export const BarLink = styled.div`
  border: 2px solid #333;  
  border-radius: 8px;    
  width: 250%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(221, 233, 231);
`;
export const Logo = styled.img`
  width:24px;
  height: auto;
  display: flex;
`;
export const DashboardTitle = styled.h1`
  font-size: 10 px;
  margin-bottom: 10px;
  font-weight: normal;

`;
export const RightSection = styled.div`
  width: 100%;
  background-color: rgb(221, 233, 231);
  color: black;
  position: relative;
  min-height: 100vh;
  // padding: 0px 20px;
`;
export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
export const NavBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
`;
export const NavTitle = styled.div`
  display: flex;
  align-items: right;
  gap: 10px;
  color: black;
  font-size: 15;
  padding: 10px;
  justify-content: flex-start;
  `;
export const Icons = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 0 10px;
  justify-content: flex-end;
  cursor: pointer;
`;
export const NavSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d1d1d1;
  margin: 1px 0;
`;
export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: #fff;
  padding: 0 20px;
  color:gray;
`;
export const Title = styled.div`
  // font-size: 18px;
  color: black;
`;
export const ButtonHotel = styled.button`
  background-color: gray;
  color: black;
  border: 1px; solid #ccc;
  padding: 8px 16px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 12px;
  color: black;
`;
export const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 10px;
  margin-top: auto;
  padding: 20px;
  // background: rgba(247, 241, 241, 0.1);
  border-radius: 8px;
  width: 100%;
  justify-content: top;
`;
export const LinksGridImage= styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 10px;
  margin-top: auto;
  padding: 20px;
  // background: rgba(247, 241, 241, 0.1);
  border-radius: 8px;
  width: 200%;
  justify-content: top;
`;

export const Rectangle = styled.div`
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 120px;
  margin-top: auto;
  padding: 20px;
  border-radius: 8px;
  // justify-content: start;  
  border: 2px solid #fff; 
  width: 200px;
  height: 100px;
  background-color:gray;    
`;
export const Link = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
  background-color: #f1f1f1;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  width: 100%;
`;

export const ProfileContainer = styled.div` 
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  width: 100%;
  justify-content: top;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
`;

export const ProfileName = styled.span`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;
export const StatusIndicator = styled.span`
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
  margin-left: 8px;
  `;
