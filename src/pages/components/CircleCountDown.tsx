/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styled from "styled-components";

const StyledCountdown = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 40px;
  }

  .timer-wrapper {
    display: flex;
    justify-content: center;
  }

  .time-wrapper {
    position: relative;
    width: 40px;
    height: 30px;
    font-size: 16px;
  }

  .time-wrapper .time {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(0);
    opacity: 1;
    transition: all 0.2s;
  }

  .time-wrapper .time.up {
    opacity: 0;
    transform: translateY(-100%);
  }

  .time-wrapper .time.down {
    opacity: 0;
    transform: translateY(100%);
  }
`;

const RenderTime = (props: { remainingTime: number }) => {
  const { remainingTime } = props;
  const currentTime = useRef(remainingTime);
  const prevTime = useRef<any>(null);
  const isNewTimeFirstTick = useRef<any>(false);
  const [, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  // force one last re-render when the time is over to tirgger the last animation
  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1);
    }, 20);
  }

  const isTimeUp = isNewTimeFirstTick.current;

  return (
    <div className="time-wrapper">
      <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
        {remainingTime}
      </div>
      {prevTime.current !== null && (
        <div
          key={prevTime.current}
          className={`time ${!isTimeUp ? "down" : ""}`}
        >
          {prevTime.current}
        </div>
      )}
    </div>
  );
};

export const CircleCountDown = (props: {
  isPlaying: boolean;
  duration: number;
}) => {
  return (
    <StyledCountdown className="timer-wrapper">
      <CountdownCircleTimer
        isPlaying={props.isPlaying}
        duration={props.duration}
        colors={[
          ["#26243F", 0.33],
          ["#FFD436", 0.33],
          ["#A30000", 1],
        ]}
        size={40}
        strokeWidth={3}
      >
        {({ remainingTime }: any) => (
          <RenderTime remainingTime={remainingTime} />
        )}
      </CountdownCircleTimer>
    </StyledCountdown>
  );
};
