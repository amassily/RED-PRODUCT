import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  background: url("/images/bg.webp") no-repeat center center/cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 100px;



`;
export const Img = styled.img`
  width: 30px;
  height: auto;
  display: block;
`;
export const Title = styled.h1`
  color: #d3d3d3;
  font-size: 25px;
  text-align: center;
  font-weight: normal;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 2px;
  width: 300px;
  text-align: center;
  z-index: 1;

`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #ccc;
  background: transparent;
  color: black;
  font-size: 14px;
//   gap:20px;

   &:focus {
    outline: none;
    border-bottom: 2px solid yellow;
  }

    label{
    margin-left: 10px;
    color:black;
    font-weight:bold;
    }

`;


export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background: #45484b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size:18px;
`;
export const ForgotLink = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #d3d3d3;
  font-size: 14px;

   p {
    margin-top: 20px;
    text-decoration:none;
  }

`;
export const Link = styled.a`
  color: yellow;
  text-decoration:none;
`;

