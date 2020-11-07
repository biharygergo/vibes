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
}

export const VideoPlayer = (props: VideoPlayerProps) => {
  const [player, setPlayer] = useState<VideoJsPlayer | null>(null);
  const videoNode = useRef(null);

  useEffect(() => {
    if (!player && videoNode && videoNode.current) {
      console.log("creating player");
      const _player = videojs(
        videoNode.current,
        { ...props },
        function onPlayerReady() {
          console.log("onPlayerReady");
        }
      );

      _player.on("ended", props.onFinished);

      setPlayer(_player);
    }

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [props, player]);

  return (
    <div data-vjs-player>
      <video ref={videoNode} className="video-js vjs-fluid vjs-fill"></video>
    </div>
  );
};
