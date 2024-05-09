import React, { Component } from 'react';
import "../../styles/home.css";
import logo from "../../assets/Schoollogo.png";

class StudentInfo extends Component {
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
        return(
            <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <div className="home-container">
                <header className="home-header">
                  <img className="home-logo" src={logo} alt="School Logo" />
                  <nav>
                    <ul>
                      <li><a href="/parenthome">Home</a></li>
                      <li><a href="/studentprofile">Student Information</a></li>
                      <li><a href="">Enrollment</a></li>
                    </ul>
                  </nav>
                </header>
                <div className ="home-content">
                    <div className ="home-student-profile">
                        <h2>Student Information</h2>
                        <div>
                            <p>First Name: Juan &nbsp; Last Name: Dela Cruz</p>
                            <p>Email: juan@gmail.com &nbsp; Contact No: 123456789</p>
                            <p>Grade Level: 3 &nbsp; Section/Class: Lorem</p>
                            <p>Student ID: 123456789</p>
                            <p>Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <h2>Student Medical Information</h2>
                        <div>
                            <p>Medical Conditions: Lorem Ipsum &nbsp; Allergies: Lorem Ipsum</p>
                            <p>Emergency Contact: 123456789</p>
                        </div>

                        <h2>Parent/Guardian Information</h2>
                        <div>
                            <p>First Name: Juan &nbsp; Last Name: Dela Cruz</p>
                            <p>Email: juan@gmail.com &nbsp; Contact No: 123456789</p>
                            <p>Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        </div>
                    </div>
                <footer className= "home-footer">
                Sta. Teresita Elementary School © 2023. All Rights Reserved.
                </footer>
              </div>
            </>
        );
    }

}    

export default StudentInfo;