import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
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

const pulse = (random: number) => keyframes`
    0% {
        transform : scale(1 + ${random * 0.5});
    }
    50% {
        transform : scale(1.1)  translateY(calc(${
          random * 5
        }px)) translateY(calc(${random * 5}px));
    }
    100% {
        transform : scale(1);
    }
`;

const FloatingEmoji = styled.span<{
  size: number;
  offsetX: number;
  offsetY: number;
  random: number;
}>`
  position: absolute;
  top: ${(props) => props.offsetY}px;
  left: ${(props) => props.offsetX}px;
  font-size: ${(props) => props.size}rem;
  text-shadow: ${(props) => props.theme.emojiShadow};
  animation: ${(props) => pulse(props.random * props.random > 0.5 ? -1 : 1)}
    ${(props) => props.random * 10 + 3}s ease-in-out infinite;
`;

const DescriptionText = styled.p`
  color: ${(props) => props.theme.color};
  text-align: center;
  margin-bottom: 3rem;
`;

export const ShareVibePage = () => {
  const history = useHistory();
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const offsetBase =
      window.outerWidth > 768 ? 0 : window.outerWidth / 2 - 200;

    setOffset(offsetBase);
  }, []);

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
          <FloatingEmoji
            size={2}
            offsetX={offset + 50}
            offsetY={50}
            random={Math.random()}
          >
            😕
          </FloatingEmoji>
          <FloatingEmoji
            size={3}
            offsetX={offset + 270}
            offsetY={80}
            random={Math.random()}
          >
            😔
          </FloatingEmoji>
          <FloatingEmoji
            size={1}
            offsetX={offset + 70}
            offsetY={200}
            random={Math.random()}
          >
            🥴
          </FloatingEmoji>
          <FloatingEmoji
            size={2}
            offsetX={offset + 300}
            offsetY={150}
            random={Math.random()}
          >
            🤯
          </FloatingEmoji>
          <FloatingEmoji
            size={3}
            offsetX={offset + 40}
            offsetY={220}
            random={Math.random()}
          >
            🙃
          </FloatingEmoji>
        </PictureWrapper>
        <DescriptionText>
          Your colleague Peter is feeling anxious and has{" "}
          <strong>5 calendar events</strong> today.
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
