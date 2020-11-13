import React from "react";
import { useHistory } from "react-router-dom";
import VideoRecorder from "react-video-recorder";
import styled from "styled-components";
import { Button } from "../style";
import Countdown from "./components/CountDown";
import { RecordButton } from "./components/RecordButton";
import { StopButton } from "./components/StopButton";
import Timer from "./components/Timer";

const FullScreenRecorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  scroll: none;
`;

const ActionsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 80px;
`;

const OverlayButton = styled.button`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border-radius: 8px;
  padding: 17px 18px;
  border: none;
  margin: 5px;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  :hover {
    background: #eee;
  }
`;

const RecordHelpTextWrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
`;

const RecordHelpText = styled.div`
  border-radius: 25px;
  background: white;
  color: #252b35;
  font-size: 1rem;
  padding: 1rem;
  width: 69%;
  margin: 0 auto;
  text-align: center;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

const Actions = ({
  isVideoInputSupported,
  isInlineRecordingSupported,
  thereWasAnError,
  isRecording,
  isCameraOn,
  streamIsReady,
  isConnecting,
  isRunningCountdown,
  isReplayingVideo,
  countdownTime,
  timeLimit,
  showReplayControls,
  replayVideoAutoplayAndLoopOff,
  useVideoInput,
  onTurnOnCamera,
  onTurnOffCamera,
  onOpenVideoInput,
  onStartRecording,
  onStopRecording,
  onPauseRecording,
  onResumeRecording,
  onStopReplaying,
  onConfirm,
  onSend,
}: any) => {
  const renderContent = () => {
    const shouldUseVideoInput =
      !isInlineRecordingSupported && isVideoInputSupported;

    if (
      (!isInlineRecordingSupported && !isVideoInputSupported) ||
      thereWasAnError ||
      isConnecting ||
      isRunningCountdown
    ) {
      return null;
    }

    if (isReplayingVideo) {
      return (
        <div>
          <Button type="button" onClick={onSend} style={{ width: "300px" }}>
            Send Vibe
          </Button>
        </div>
      );
    }

    if (isRecording) {
      return (
        <StopButton
          type="button"
          onClick={onStopRecording}
          data-qa="stop-recording"
        />
      );
    }

    if (isCameraOn && streamIsReady) {
      return (
        <>
          <RecordButton
            type="button"
            onClick={onStartRecording}
            data-qa="start-recording"
          />
        </>
      );
    }

    if (useVideoInput) {
      return (
        <OverlayButton
          type="button"
          onClick={onOpenVideoInput}
          data-qa="open-input"
        >
          Upload a video
        </OverlayButton>
      );
    }

    return shouldUseVideoInput ? (
      <OverlayButton
        type="button"
        onClick={onOpenVideoInput}
        data-qa="open-input"
      >
        Record a video
      </OverlayButton>
    ) : (
      <OverlayButton
        type="button"
        onClick={onTurnOnCamera}
        data-qa="turn-on-camera"
      >
        Turn my camera ON
      </OverlayButton>
    );
  };

  return (
    <div>
      {isCameraOn && streamIsReady && !isRecording && !isReplayingVideo && (
        <RecordHelpTextWrapper>
          <RecordHelpText>Peter likes football, maybe you have this in common?</RecordHelpText>
        </RecordHelpTextWrapper>
      )}
      {isRecording && <Timer timeLimit={timeLimit} defaultText="0:00" />}
      {isRunningCountdown && <Countdown countdownTime={countdownTime} />}
      <ActionsWrapper>{renderContent()}</ActionsWrapper>
    </div>
  );
};

const UnsupportedView = (props: { onSend: () => void }) => (
  <div style={{ padding: 10 }}>
    <p style={{ margin: 15 }}>
      This browser is uncapable of recording video. Please try in Chrome
      instead or give permissions.
    </p>
    <Button onClick={props.onSend}>Skip Recording</Button>{" "}
  </div>
);

export const RecordVibePage = () => {
  const history = useHistory();
  const onSend = () => {
    history.push("/record/success");
  };
  return (
    <FullScreenRecorder>
      <VideoRecorder
        isOnInitially={true}
        onRecordingComplete={(videoBlob: any) => {
          console.log("videoBlob", videoBlob);
        }}
        renderActions={(props: any) => <Actions {...{ ...props, onSend }} />}
        renderUnsupportedView={() => <UnsupportedView onSend={onSend} />}
      />
    </FullScreenRecorder>
  );
};
