import React from "react";

interface VideoPlayerProps {
  videoURL: string; // L'ID de la vidéo YouTube
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoURL }) => {
  return (
    <div
      style={{ position: "relative", paddingTop: "56.25%" /* Ratio 16:9 */ }}
    >
      <iframe
        src={videoURL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
