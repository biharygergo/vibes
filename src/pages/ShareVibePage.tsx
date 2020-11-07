import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  Button,
  Content,
  Footer,
  Header,
  HeaderTitle,
  PageLayout,
} from "../style";

const PictureWrapper = styled.div`
  position: relative;
  padding: 60px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PictureDiv = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 25px;
  box-shadow: ${(props) => props.theme.boxShadow};
  overflow: hidden;
`;

const Picture = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const FloatingEmoji = styled.span<{
  size: number;
  offsetX: number;
  offsetY: number;
}>`
  position: absolute;
  top: ${(props) => props.offsetY}px;
  left: ${(props) => props.offsetX}px;
  font-size: ${(props) => props.size}rem;
  text-shadow: ${(props) => props.theme.emojiShadow};
`;

const DescriptionText = styled.p`
  color: ${(props) => props.theme.lightText};
  text-align: center;
  margin-bottom: 3rem;
`;

export const ShareVibePage = () => {
  const history = useHistory();

  return (
    <PageLayout>
      <Header>
        <HeaderTitle>Share some of that good Vibe!</HeaderTitle>
      </Header>
      <Content>
        <PictureWrapper>
          <PictureDiv>
            <Picture src="/assets/profile_image.png" alt="Profile of sender" />
          </PictureDiv>
          <FloatingEmoji size={2} offsetX={50} offsetY={50}>
            😕
          </FloatingEmoji>
          <FloatingEmoji size={3} offsetX={270} offsetY={80}>
            😔
          </FloatingEmoji>
          <FloatingEmoji size={1} offsetX={70} offsetY={200}>
            🥴
          </FloatingEmoji>
          <FloatingEmoji size={2} offsetX={300} offsetY={150}>
            🤯
          </FloatingEmoji>
          <FloatingEmoji size={3} offsetX={40} offsetY={220}>
            🙃
          </FloatingEmoji>
        </PictureWrapper>
        <DescriptionText>
          Your classmate Peter is feeling anxious and has 3 deadlines this week.
        </DescriptionText>
      </Content>
      <Footer>
        <Button onClick={() => history.push("/share/select")}>
          Send a good Vibe
        </Button>
      </Footer>
    </PageLayout>
  );
};
