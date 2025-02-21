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
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  z-index: 1;
  color: black;
  margin: 10px;
`;

export const Title = styled.h1`
  text-align: center;
  color: black;
  font-size: 24px;
  border-bottom: 1px dotted #ccc;
  width: 100%;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  margin-bottom: 1rem;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 18px;
  width: 30%;
  text-align: right;
  margin-right: 1rem;
`;

export const Input = styled.input`
  background-color: transparent;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
  flex: 1;
  color:black;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
  flex: 1;
  background-color: transparent;
  color:gray;
`;

export const Button = styled.button`
  padding: 10px;
  background: gray;
  color: white;
  border: 2px solid gray;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display: block;
  margin: 1rem auto 0;
`;

export const InputImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 300px;
  height: 100px;
  padding: 10px;
  background: #ccc;
  border-radius: 10px;
  margin: 10px auto;
`;

export const UploadLabel = styled.label`
  color: gray;
  cursor: pointer;
  font-size: 14px;
`;

export const HiddenInput = styled.input`
  display: none;
`;
