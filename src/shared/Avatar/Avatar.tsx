import React, { ReactNode } from "react";
import "./Avatar.css";

interface AvatarProps {
  children?: ReactNode;
  size?: "small" | "medium" | "large";
}

const Avatar: React.FC<AvatarProps> = ({ children, size = "medium" }) => {
  return <div className={`avatar ${size}`}>{children}</div>;
};

export default Avatar;
