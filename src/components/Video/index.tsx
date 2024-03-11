import React, { VideoHTMLAttributes } from "react";

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  type?: string;
}

export const Video: React.FC<VideoProps> = ({ src, type, ...props }) => {
  return (
    <video controls width="100%" autoPlay loop {...props}>
      <source type={type} src={src} />
    </video>
  );
};
