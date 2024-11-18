import React from "react";

interface VideoPlayerProps {
  videoURL: string; // L'ID de la vidéo YouTube
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoURL }) => {
  return (
    <div style={{ position: "relative" /* Ratio 16:9 */ }}>
      <iframe
        src={videoURL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-[17rem] lg:h-[27rem]"
        style={{
          position: "relative",
          top: 0,
          left: 0, // Largeur minimale
        }}
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
