import React, { Component } from 'react';
import "../../styles/auth.css";
import logo from "../../assets/Schoollogo.png";
import schoolbg from "../../assets/schoolbg.png";

class Auth extends Component {
    API_URL = "http://localhost:7777/";

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            show_value: false,
        };
    }

    componentDidMount() {
        fetch(this.API_URL + "account/view", {
            headers: { 'authorization': sessionStorage.getItem("token") }
        })
        .then(response => response.json())
        .then(message => {
            var result = Object.keys(message).reduce((result, key) => {
                result[key] = { value: message[key] };
                return result;
            }, {});
            this.setState({ data: result, show_value: true });
        })
        .catch(error => console.log(error));
    }

    render() {
        const { data, show_value } = this.state;
        return (
            <>
            <div className="body-bg" style={{ backgroundImage: `url(${schoolbg})` }}>
                <div className="container">
                    <header>
                        <img src={logo} alt="School Logo" />
                    </header>
                    <div className="buttons">
                        <button className="login-btn">Login</button>
                        <button className="signup-btn">Sign Up</button>
                    </div>
                    {show_value && data && Object.entries(data).map(([key, { value }]) => (
                        <div key={key}>
                            <p>{key}: {value}</p>
                        </div>
                    ))}
                </div>
                <footer>
                Sta. Teresita Elementary School © 2023. All Rights Reserved.
                </footer>
            </div>
            </>
        );
    }
}

export default Auth;