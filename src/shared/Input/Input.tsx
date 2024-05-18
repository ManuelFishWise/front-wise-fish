import { useState } from "react";
import { IconType } from "react-icons";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import "./Input.css";

interface InputProps {
  icon: IconType;
  placeholder: string;
  value?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  icon: Icon,
  placeholder,
  value,
  handleChange,
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="input-container">
      <div className="icon-container">{Icon && <Icon className="icon" />}</div>
      <input
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
      />
      {type === "password" && (
        <div className="password-toggle" onClick={togglePasswordVisibility}>
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </div>
      )}
    </div>
  );
};

export default Input;
