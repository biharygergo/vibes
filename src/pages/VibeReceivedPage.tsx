import React, { useEffect, useRef, useState } from "react";
import Reward from "react-rewards";
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
import { emojiLookup } from "./FeelingNowPage";

const EmojiWrapper = styled.div`
  padding: 5rem 0 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Emoji = styled.span`
  font-size: 8rem;
  text-shadow: ${(props) => props.theme.emojiShadow};
`;
export interface Vibe {
  sender: string;
  senderName: string;
  vibe: string;
}

export const VibeReceivedPage = () => {
  const [vibe, setVibe] = useState<Vibe>({
    sender: "exampleId",
    senderName: "Greg",
    vibe: emojiLookup.Awesome.emoji,
  });

  let reward = useRef(null);
  const history = useHistory();

  useEffect(() => {
    throwConfetti();
  }, [reward]);

  const throwConfetti = () => {
    if (reward && reward.current) {
      (reward as any).current.rewardMe();
    }
  };

  const viewVibe = () => {
    history.push("/view");
  };

  return (
    <PageLayout>
      <Header>
        <HeaderTitle>
          {vibe.senderName} has sent you some good vibes!
        </HeaderTitle>
      </Header>
      <Content>
        <EmojiWrapper>
          <Reward
            ref={reward}
            type="confetti"
            config={{ lifetime: 400, angle: 85, spread: 60 }}
          >
            <Emoji onClick={throwConfetti}>{vibe.vibe}</Emoji>
          </Reward>
        </EmojiWrapper>
      </Content>
      <Footer>
        <Button onClick={viewVibe}>View Vibe</Button>
      </Footer>
    </PageLayout>
  );
};
