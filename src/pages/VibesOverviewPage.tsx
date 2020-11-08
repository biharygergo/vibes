import React from "react";
import { PageLayout, Header, HeaderTitle, Content, Button } from "../style";
import ReactWordcloud from "react-wordcloud";
import { emojiLookup } from "./FeelingNowPage";
import styled, { keyframes } from "styled-components";

const generateEmojis = () => {
  const maxEmojiCount = 40;
  const emojis = [];
  const possibleEmojis = Object.values(emojiLookup).map((item) => item.emoji);

  while (emojis.length < maxEmojiCount) {
    emojis.push({
      value: Math.floor(Math.random() * 200),
      text:
        possibleEmojis[Math.floor(Math.random() * possibleEmojis.length - 1)],
    });
  }

  return emojis;
};

const WordCloudWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50vh;
  overflow: hidden;
  transform: scale(1.8);
`;

const NoOverflowDiv = styled.div`
  overflow: hidden;
  max-width: 100vw;
  height: 70vh;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const AaltoLogo = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin: 0 auto;
  margin-top: -10px;
`;

const VibeText = styled.div`
    display: flex;
    align-items: center;
    justify-content; center;
    flex-direction: column;
    padding-top: 40px;
    h1 {
        margin: 0;
        text-align: center;
        font-size: 1.5rem;
    }
`;
export const VibesOverviewPage = () => {
  return (
    <PageLayout>
      <Content>
        <VibeText>
          <HeaderTitle>
            Current vibes <br />
            at
          </HeaderTitle>
          <AaltoLogo src="/assets/aalto.png" />
        </VibeText>
        <NoOverflowDiv>
          <WordCloudWrapper>
            <ReactWordcloud
              words={generateEmojis()}
              size={[window.innerWidth, window.innerHeight * 0.5]}
            />
          </WordCloudWrapper>
        </NoOverflowDiv>
      </Content>
    </PageLayout>
  );
};
