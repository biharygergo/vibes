import React from "react";
import { PageLayout, Header, HeaderTitle, Content, Button } from "../style";
import ReactWordcloud from "react-wordcloud";
import { emojiLookup } from "./FeelingNowPage";
import styled from "styled-components";

const words = [
  {
    text: emojiLookup.Awesome.emoji,
    value: 64,
  },
  {
    text: emojiLookup.Anxious.emoji,
    value: 11,
  },
  {
    text: emojiLookup.Breakdown.emoji,
    value: 16,
  },
  {
    text: emojiLookup.FeelTheLove.emoji,
    value: 17,
  },
];

const generateEmojis = () => {
  const maxEmojiCount = 500;
  const emojis = [];
  const possibleEmojis = Object.values(emojiLookup).map((item) => item.emoji);

  while (emojis.length < maxEmojiCount) {
    emojis.push({
      value: Math.floor(Math.random() * 200),
      text: possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)],
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
export const VibesOverviewPage = () => {
  return (
    <PageLayout>
      <Header>
        <HeaderTitle>See the current Vibe at Aalto</HeaderTitle>
      </Header>
      <Content>
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
