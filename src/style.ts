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
  boxShadow: "rgba(21, 34, 53, 0.1) 0px 6px 18px 0px",
  emojiShadow: "-6px 10px 15px rgba(224,151,17,0.40)",
};

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0px 10px;
  justify-content: space-between;
`;

export const Header = styled.div`
  padding-top: 5px;
  z-index: 99;
  flex: 1;
`;

export const Content = styled.div`
  flex: 4;
  min-height: 0;
  overflow-y: auto;
  padding-bottom: 10px;
`;

export const Footer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.text};
  margin-bottom: 20px;
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
