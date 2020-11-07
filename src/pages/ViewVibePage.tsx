import React, { useEffect, useRef, useState } from "react";
import Reward from "react-rewards";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { CircleCountDown } from "./components/CircleCountDown";
import { VideoPlayer } from "./components/VideoPlayer";

const FullSizePlayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  scroll: none;

  .video-js {
    width: 100%;
    height: 100%;

    .vjs-big-play-button {
      top: 40%;
      left: calc(50vw - 1.5em);
      background: white;
      color: black;
      height: 3em;
      width: 3em;
      border-radius: 50%;
      line-height: 3em;
    }

    .vjs-control-bar {
      display: none;
    }
    .vjs-tech {
      object-fit: cover;
    }
  }
`;

const EmojiSelector = styled.div`
  height: 200px;
  background: linear-gradient(
    0deg,
    rgba(38, 36, 63, 1) 0%,
    rgba(0, 212, 255, 0) 100%
  );
  opacity: 0.6;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const EmojiWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
`;

const ReactionEmoji = styled.span<{ offsetY: number }>`
  margin-bottom: ${(props) => props.offsetY}px;
  font-size: 3rem;
  text-shadow: ${(props) => props.theme.emojiShadow};
`;

const ConfettiPseudo = styled.div`
  left: 50%;
  bottom: 20px;
  width: 20px;
  height: 20px;
  position: absolute;
`;

const EmojiSelectorComponent = () => {
  const rewardRef = useRef(null);
  const [emojiConfetti, setEmojiConfetti] = useState<string>("❤️");

  const fireConfetti = (emoji: string) => {
    setEmojiConfetti(emoji);
    if (rewardRef && rewardRef.current) {
      // Sorry about this
      setTimeout(() => (rewardRef as any).current.rewardMe(), 100);
    }
  };
  return (
    <EmojiSelector>
      <EmojiWrapper>
        <ReactionEmoji offsetY={0} onClick={() => fireConfetti("🤩")}>
          🤩
        </ReactionEmoji>
        <ReactionEmoji offsetY={30} onClick={() => fireConfetti("🤪")}>
          🤪
        </ReactionEmoji>
        <ReactionEmoji offsetY={40} onClick={() => fireConfetti("❤️")}>
          ❤️
        </ReactionEmoji>
        <ReactionEmoji offsetY={30} onClick={() => fireConfetti("😁")}>
          😁
        </ReactionEmoji>
        <ReactionEmoji offsetY={0} onClick={() => fireConfetti("🤔")}>
          🤔
        </ReactionEmoji>
      </EmojiWrapper>
      <Reward
        ref={rewardRef}
        config={{ emoji: [emojiConfetti], angle: 120, spread: 200 }}
        type="emoji"
      >
        <ConfettiPseudo />
      </Reward>
    </EmojiSelector>
  );
};

export const ViewVibePage = () => {
  const [source, setSource] = useState<string>();
  const [duration, setDuration] = useState<number | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const history = useHistory();
  useEffect(() => {
    setSource("/assets/example_vibe.mp4");
  }, []);

  const onFinished = () => {
    history.push("/share");
  };

  console.log('Duration', duration)

  return (
    <>
      <FullSizePlayer>
        {source && (
          <VideoPlayer
            autoplay={true}
            controls={true}
            sources={[{ type: "video/mp4", src: source }]}
            onFinished={onFinished}
            onDurationLoaded={(duration) => setDuration(duration)}
            onPlayStarted={() => setPlaying(true)}
          />
        )}
      </FullSizePlayer>
      <EmojiSelectorComponent />
      {duration && <CircleCountDown isPlaying={playing} duration={duration} />}
    </>
  );
};
