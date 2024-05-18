import { FormEvent, useState } from "react";

import { FaLock, FaEnvelope } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

import { Input, Button } from "../../shared";

import Logo from "../../assets/img/logo.png";

import "./AuthForm.css";

const AuthForm = () => {

  const navigate = useNavigate();

  interface FormState {
    email: string;
    password: string;
  }

  const initialFormState: FormState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState<FormState>(initialFormState);

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
    navigate('/dashboard/lagos');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="auth-logo">
        <img className="auth-logo-image" src={Logo} alt="logo" />
      </div>
      <div className="auth-form">
        <Input
          icon={FaEnvelope}
          placeholder="Correo"
          value={formData.email}
          handleChange={(event) =>
            handleInputChange("email", event.target.value)
          }
          type="text"
        />
        <Input
          icon={FaLock}
          placeholder="Contrasena"
          value={formData.password}
          handleChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          type="password"
        />
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default AuthForm;
