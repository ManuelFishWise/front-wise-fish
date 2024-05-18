import AuthForm from "./AuthForm/AuthForm";

import Splash1 from "../assets/img/splash1.png";
import Splash2 from "../assets/img/splash2.png";

import "./Authentication.css";

const Authentication: React.FC = () => {
  return (
    <div className="auth-bg">
      <img className="splash-1" src={Splash2} alt="splash1" />
      <img className="splash-2" src={Splash1} alt="splash2" />
      <img className="splash-3" src={Splash1} alt="splash3" />
      <img className="splash-4" src={Splash1} alt="splash4" />
      <img className="splash-5" src={Splash2} alt="splash5" />
      <img className="splash-6" src={Splash1} alt="splash6" />

      <div className="form-container">
        <AuthForm />
      </div>
    </div>
  );
};

export default Authentication;
