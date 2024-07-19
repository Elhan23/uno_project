import React, { useState } from "react";
import "./Login.scss";
import logo from "../../assets/icons/logo.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Введите правильный email");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Пароль должен быть не менее 6 символов");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      console.log("Form submitted");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="global_form">
        <div className="form_style">
          <div>
            <img src={logo} alt="logo" />
          </div>

          <div className="login_inp">
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className="error">{emailError}</div>}
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <div className="error">{passwordError}</div>}
          </div>
          <button type="submit">Войти</button>
        </div>
      </div>
    </form>
  );
}

export default Login;
