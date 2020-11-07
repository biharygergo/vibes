import styled from "styled-components";

export const theme = {
  primary: "#26243F",
  secondary: "#B0B6C2",
  accent: "#FFD436",
  text: "#252B35",
  lightText: "#B0B6C2",
  darkText: "",
  textOnPrimary: "",
  textOnSecondary: "",
  background: "#FFFFFF",
  boxShadow: "0 -10px 100px 20px #F4F4F7",
  emojiShadow: "-6px 10px 15px rgba(224,151,17,0.40)",
};

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px 10px;
`;

export const Header = styled.div`
  padding-top: 30px;
  z-index: 99;
`;

export const Content = styled.div``;

export const Footer = styled.div``;

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.text};
  margin-bottom: 40px;
  z-index: 99;
`;

export const Button = styled.button`
  border: none;
  color: white;
  background: ${(props) => props.theme.primary};
  padding: 1rem 4rem;
  width: 100%;
  border-radius: 8px;

  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(3px);
    transition: transform 100ms;
  }
`;
