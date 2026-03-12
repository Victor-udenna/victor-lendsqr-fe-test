import "./LoginStyle.scss";
import loginIllustrationImg from "../../assets/images/signinIllustration.png";
import logo from "../../assets/images/logo.svg";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Login successful (demo)");
    navigate("/dashboard");
  };

  const togglePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-page_img_container">
        <div className="login-page-img__wrapper">
          <img className="logo" src={logo} alt="logo" />
          <img className="login-page__img" src={loginIllustrationImg} alt="login illustration" />
        </div>
      </div>
      <div className="login-form-section">
        <div className="login-form-section__title-container">
          <h1 className="login-form-section__title">Welcome!</h1>
          <p className="login-form-section__description">Enter details to login.</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              className="login-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              className="login-input"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="button" onClick={togglePassword} className="reveal-password">
              {!showPassword ? "SHOW" : "HIDE"}
            </Button>
          </div>
          <p className="forgot-password">Forgot PASSWORD?</p>
          <Button
            disabled={!email && !password}
            className={`login-btn ${!email && !password ? "inactive" : ""}`}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
