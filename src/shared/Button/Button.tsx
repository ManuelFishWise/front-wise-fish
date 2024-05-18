import React, { ReactNode, MouseEvent } from "react";
import "./Button.css";

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  type: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
}) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
