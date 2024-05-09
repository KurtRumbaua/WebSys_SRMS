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

    // Checker
    if (!email || !password) {
      setError('All fields must be filled out');
      return;
    }
    
    // Fetch login information (??) fg
    console.log('Logging in with:', email)
    console.log("password: ", password);
    fetch("http://localhost:7000/account/login", {
      headers: {
        'Content-Type': 'application/json',
      },
      method: "POST",
      body: JSON.stringify({ email, password: password})
    })
    .then(response => {
      if (!response.ok) throw new Error('Wrong email or password');
      return response.json();
    })
    .then((message) => {
      setError('');
        sessionStorage.setItem('email', email);

        let role = message['data']['role'];
        console.log('Logged in as:', role);
      if (role === 'ADMIN') {
        navigate('/admin-dashboard');
      } else if (role === 'PARENT') {
       navigate('/parenthome');
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
