import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import "../../styles/login.css";
import emailIcon from "../../assets/email.png";
import passwordIcon from "../../assets/password.png";
import eyeIcon from "../../assets/eye.png";
import eyeOffIcon from "../../assets/noeye.png";
import logo from "../../assets/Schoollogo.png";
import schoolbg from "../../assets/schoolbg.png";
import sha256 from 'crypto-js/sha256';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Updated hook

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError('All fields must be filled out');
      return;
    }

    const hashedPassword = sha256(password).toString();
    fetch("http://localhost:7777/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'authorization': sessionStorage.getItem("token")
      },
      body: JSON.stringify({ email, password: hashedPassword })
    })
    .then(response => {
      if (!response.ok) throw new Error('Wrong email or password');
      return response.json();
    })
    .then(({ role }) => {
      setError('');
      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else if (role === 'parent') {
        navigate('/parent-dashboard');
      } else {
        navigate('/user-dashboard');
      }
    })
    .catch(error => {
      console.error('Login failed:', error);
      setError(error.message);
    });
  };

  return (
    <div className="login-background" style={{backgroundImage: `url(${schoolbg})`, backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="login-container">
        <div className="left-container">
          <h1>Santa Teresita</h1>
            <h1>Elementary School</h1>
          <img src={logo} alt="School Logo" className="logo" />
        </div>
        <div className="right-container">
          <h2>Sign In</h2>
          <form onSubmit={handleLogin}>
            {error && <p className="error-message">{error}</p>}
            <div className="input-container">
              <img className="input-icon" src={emailIcon} alt="Email Icon" />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-container">
              <img className="input-icon" src={passwordIcon} alt="Password Icon" />
              <input type={passwordShown ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <img className="eye-icon" src={passwordShown ? eyeIcon : eyeOffIcon} alt="Toggle Password Visibility" onClick={togglePasswordVisibility} />
            </div>
            <button class="login-button" type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
