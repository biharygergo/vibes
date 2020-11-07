import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.color};
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background: rgba(227, 73, 28, 1);
  outline: none;
  border: none;
  cursor: pointer;
  :hover {
    background: #fb6d42;
  }
`;

const RecWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonBorder = styled.div`
  border: 8px solid rgba(255, 255, 255, 0.4);
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

export const RecordButton = (props: any) => (
  <RecWrapper>
    <ButtonBorder>
      <Button {...props} />
    </ButtonBorder>
  </RecWrapper>
);
