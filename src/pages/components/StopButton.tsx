import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.color};
  border-radius: 4px;
  width: 40px;
  height: 40px;
  background: rgba(227, 73, 28, 1);
  outline: none;
  border: none;
  cursor: pointer;
  margin: 20px;
  :hover {
    background: #fb6d42;
  }
`;

const Border = styled.div`
  background: rgba(255, 255, 255, 0.4);
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

export const StopButton = (props: any) => (
  <Border>
    <Button {...props} />
  </Border>
);
