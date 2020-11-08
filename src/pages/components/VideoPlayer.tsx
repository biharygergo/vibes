/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import videojs, { VideoJsPlayer } from "video.js";

export interface VideoPlayerProps {
  autoplay: boolean;
  controls: boolean;
  sources: {
    src: string;
    type: "video/mp4";
  }[];
  onFinished: () => void;
  onDurationLoaded: (duration: number) => void;
  onPlayStarted: () => void;
}

export const VideoPlayer = (props: VideoPlayerProps) => {
  const [player, setPlayer] = useState<VideoJsPlayer | null>(null);
  const videoNode = useRef(null);

  useEffect(() => {
    if (!player && videoNode && videoNode.current) {
      const _player = videojs(
        videoNode.current,
        { ...props },
        function onPlayerReady() {}
      );

      _player.on("ended", props.onFinished);

      _player.on("loadedmetadata", (_event) => {
        props.onDurationLoaded(_player.duration());
      });

      _player.on("play", () => props.onPlayStarted());

      setPlayer(_player);
    }

    return () => {
      if (player) {
        // player.dispose();
      }
    };
  }, [videoNode, player]);

  return (
    <div data-vjs-player>
      <video
        ref={videoNode}
        className="video-js vjs-fluid vjs-fill"
        playsInline
      ></video>
    </div>
  );
};
