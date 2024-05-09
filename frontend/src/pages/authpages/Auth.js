import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/auth.css";
import logo from "../../assets/Schoollogo.png";
import schoolbg from "../../assets/schoolbg.png";
import Login from "../../pages/authpages/Login";

class Auth extends Component {
    API_URL = "http://localhost:7000/";

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            show_value: false,
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
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

    handleLoginClick() {
        this.props.navigate('/Login');
    }

    handleSignupClick(){
        this.props.navigate('/signup'); 
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
                        <button className="login-btn" onClick={this.handleLoginClick}>Login</button>
                        <button className="signup-btn">Sign Up</button>
                    </div>
                    {show_value && data && Object.entries(data).map(([key, { value }]) => (
                        <div key={key}>
                            <p>{key}: {value}</p>
                        </div>
                    ))}
                </div>
                
            </div>
            <div>
            <footer className="authfooter">
                <br/>
                <br/> 
                Sta. Teresita Elementary School © 2023. All Rights Reserved.
                </footer>
            </div>
            </>
        );
    }
}

function withRouter(Component) {
    function ComponentWithNavigation(props) {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    }
    return ComponentWithNavigation;
}

export default withRouter(Auth);
