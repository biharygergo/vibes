import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 10px;
`;

const Header = styled.div`
  flex: 1;
  padding-top: 30px;
  z-index: 99;
`;

const Selector = styled.div`
  flex: 2;
`;

const Footer = styled.div`
  flex: 1;
`;

const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.text};
  margin-bottom: 40px;
  z-index: 99;
`;

const SelectorCardWrapper = styled.div`
  width: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
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

export const emojiLookup = {
  Awesome: { emoji: "🤩", label: "Awesome", value: 5 },
  Crazy: { emoji: "🤪", label: "Crazy", value: 3 },
  Sick: { emoji: "🤒", label: "Sick", value: 2 },
  Explosive: { emoji: "🤯", label: "Explosive", value: 1 },
};

export const FeelingNowPage = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<number>();
  const history = useHistory();

  const emojis = [
    { emoji: "🤩", label: "Awesome" },
    { emoji: "🤪", label: "Crazy" },
    { emoji: "🤒", label: "Sick" },
    { emoji: "🤯", label: "Explosive" },
  ];

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
      <Selector>
        {emojis.map((item, index) => (
          <SelectorCardWrapper key={item.label}>
            <SelectorCard
              selected={selectedEmoji === index}
              onClick={() => setSelectedEmoji(index)}
            >
              <SelectorCardInner>
                <Emoji>{item.emoji}</Emoji>
                <EmojiText>{item.label}</EmojiText>
              </SelectorCardInner>
            </SelectorCard>
          </SelectorCardWrapper>
        ))}

        <DetailsBlock>
          We noticed 2 upcoming deadlines for your courses.
        </DetailsBlock>
      </Selector>
      <Footer>
        <Button onClick={onNextClick}>Next</Button>
      </Footer>
    </PageLayout>
  );
};
