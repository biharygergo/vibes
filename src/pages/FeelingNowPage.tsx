import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { PageLayout, Header, HeaderTitle, Content, Footer } from "../style";

const SelectorCardWrapper = styled.div`
  width: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  :first-child {
    margin-top: 10px;
  }
`;

const SelectorCard = styled.div<{ selected?: boolean }>`
  border-radius: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  width: 150px;
  height: 150px;
  margin: 4px;

  ${(props) =>
    props.selected &&
    `
    border: 4px solid ${props.theme.accent};
  `}
`;

const SelectorCardInner = styled.div`
  background: white;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  cursor: pointer;
`;

const Emoji = styled.span`
  font-size: 4rem;
  text-shadow: ${(props) => props.theme.emojiShadow};
`;

const DetailsBlock = styled.div`
  text-align: center;
  padding: 2rem 0;
  color: ${(props) => props.theme.lightText};
`;

const Button = styled.button`
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

const EmojiText = styled.span`
  color: ${(props) => props.theme.primary};
  font-weight: bold;
`;

export interface Emoji {
  emoji: string;
  label: string;
  value: number;
}

export const emojiLookup = {
  Awesome: { emoji: "🤩", label: "Awesome", value: 5 },
  Crazy: { emoji: "🤪", label: "Crazy", value: 3 },
  Sick: { emoji: "🤒", label: "Sick", value: 2 },
  Breakdown: { emoji: "🤯", label: "Breakdown", value: 1 },
  Party: { emoji: "🥳", label: "Go Crazy", value: 5 },
  FeelTheLove: { emoji: "😍", label: "Feel the Love", value: 5 },
  ActSmart: { emoji: "🤓", label: "Act Smart", value: 4 },
  Anxious: { emoji: "😰", label: "Anxious", value: 2 },
  Alright: { emoji: "😊", label: "Alright", value: 2 },
};

const emojisToShow = [
  emojiLookup.Awesome,
  emojiLookup.Alright,
  emojiLookup.Anxious,
  emojiLookup.Breakdown,
];
export interface EmojiSelectorProps {
  emojis: Emoji[];
  onSelected: (emoji: Emoji) => void;
}

export const EmojiSelector = (props: EmojiSelectorProps) => {
  const [selectedEmoji, setSelectedEmoji] = useState<number>();
  const { emojis, onSelected } = props;
  return (
    <>
      {emojis.map((item, index) => (
        <SelectorCardWrapper key={item.label}>
          <SelectorCard
            selected={selectedEmoji === index}
            onClick={() => {
              setSelectedEmoji(index);
              onSelected(item);
            }}
          >
            <SelectorCardInner>
              <Emoji>{item.emoji}</Emoji>
              <EmojiText>{item.label}</EmojiText>
            </SelectorCardInner>
          </SelectorCard>
        </SelectorCardWrapper>
      ))}
    </>
  );
};

export const FeelingNowPage = () => {
  const history = useHistory();
  const [selectedEmoji, setSelectedEmoji] = useState<number>();

  const onNextClick = () => {
    history.push(`/history?lastFeelingId=${selectedEmoji || ""}`);
  };

  return (
    <PageLayout>
      <Header>
        <HeaderTitle>
          What is your <br />
          vibe?
        </HeaderTitle>
      </Header>
      <Content>
        <EmojiSelector
          emojis={emojisToShow}
          onSelected={(emoji) => setSelectedEmoji(emoji.value)}
        />

        <DetailsBlock>
          We noticed 5 meetings on your calendar today.
        </DetailsBlock>
      </Content>
      <Footer>
        <Button onClick={onNextClick}>Next</Button>
      </Footer>
    </PageLayout>
  );
};
