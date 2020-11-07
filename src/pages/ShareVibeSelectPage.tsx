import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  PageLayout,
  Header,
  HeaderTitle,
  Content,
  Button,
  Footer,
} from "../style";
import { emojiLookup, EmojiSelector } from "./FeelingNowPage";

const emojisToShow = [
  emojiLookup.Awesome,
  emojiLookup.Party,
  emojiLookup.FeelTheLove,
  emojiLookup.ActSmart,
];

const DescriptionText = styled.p`
  color: ${(props) => props.theme.lightText};
  text-align: center;
  margin-bottom: 3rem;
`;

export const ShareVibeSelectPage = () => {
  const history = useHistory();
  const onNext = () => {
    history.push("/record");
  };

  return (
    <PageLayout>
      <Header>
        <HeaderTitle>Select the perfect Vibe!</HeaderTitle>
      </Header>
      <Content>
        <EmojiSelector emojis={emojisToShow} onSelected={() => {}} />
        <DescriptionText>
          Select the perfect Vibe to cheer up Peter!
        </DescriptionText>
      </Content>
      <Footer>
        <Button onClick={onNext}>Next</Button>
      </Footer>
    </PageLayout>
  );
};
