import React, { Component } from 'react';
import "../../styles/parenthome.css";
import logo from "../../assets/Schoollogo.png";
import editbutton from "../../assets/edit-button.png"

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

        let user_id = sessionStorage.getItem("user_id");
        console.log("water_user_id: ", user_id);
        
        fetch("http://localhost:7000/student/viewone", {
            headers: { 
                'userId': user_id
            },
            method: "GET",
        })
        .then(response => response.json())
        .then(message => {
            message = message['data'];
            // Fetch login information (??) fg
            this.setState({ data: message, show_value: true });
            console.log("water_message: ", message);
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
                  <nav class = "nav">
                    <ul>
                      <li><a href="/parenthome">Home</a></li>
                      <li><a href="/studentprofile">Student Information</a></li>
                      <li><a href="/enroll-student">Enrollment</a></li>
                    </ul>
                  </nav>
                </header>
                <div className ="home-content">
                <div class="home-student-profile">
                <h2 class = "title">Student Information</h2>
                <div class="student-information">
                    <div class="field">
                    <span class="label">First Name:</span>
                    <span class="value">{this.state.show_value ? this.state.data['firstName'] : "loading..."}</span>
                    </div>
                    <div class="field">
                    <span class="label">Last Name:</span>
                    <span class="value">{this.state.show_value ? this.state.data['lastName']: "loading..."}</span>
                    </div>
                    <div class="field">
                    <span class="label">Email:</span>
                    <span class="value">{this.state.show_value ? this.state.data['email']: "loading..."}</span>
                    </div>
                    <div class="field">
                    <span class="label">Contact No:</span>
                    <span class="value">{this.state.show_value ? this.state.data['contactNumber']: "loading..."}</span>
                    </div>
                    <div class="field">
                    <span class="label">Grade Level:</span>
                    <span class="value">{this.state.show_value ? this.state.data['gradeLevel']: "loading..."}</span>
                    </div>
                    <div class="field">
                    <span class="label">Section/Class:</span>
                    <span class="value">{this.state.show_value ? this.state.data['section']: "loading..."}</span>
                    </div>
                    <div class="field">
                    <span class="label">Student ID:</span>
                    <span class="value">{this.state.show_value ? this.state.data['studentNumber']: "loading..."}</span>
                    </div>
                    <div class="field">
                    <span class="label">Address:</span>
                    <span class="value">{this.state.show_value ? this.state.data['address']: "loading..."}</span>
                    </div>
                </div>
                <h2 class = "title">Student Medical Information</h2>
                <div class="student-medical-information">
                    <div class="field">
                    <span class="label">Medical Conditions:</span>
                    <span class="value">Lorem Ipsum</span>
                    </div>
                    <div class="field">
                    <span class="label">Allergies:</span>
                    <span class="value">Lorem Ipsum</span>
                    </div>
                    <div class="field">
                    <span class="label">Emergency Contact:</span>
                    <span class="value">{this.state.show_value ? this.state.data['emergencyContact']: "loading..."}</span>
                    </div>
                </div>

                <h2 class = "title">Parent/Guardian Information</h2>
                <div class="parent-guardian-information">
                    <div class="field">
                    <span class="label">First Name:</span>
                    <span class="value">Juan</span>
                    </div>
                    <div class="field">
                    <span class="label">Last Name:</span>
                    <span class="value">Dela Cruz</span>
                    </div>
                    <div class="field">
                    <span class="label">Email:</span>
                    <span class="value">juan@gmail.com</span>
                    </div>
                    <div class="field">
                    <span class="label">Contact No:</span>
                    <span class="value">123456789</span>
                    </div>
                    <div class="field">
                    <span class="label">Address:</span>
                    <span class="value">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                        <button class="edit-button">
                            <img src={editbutton} alt="Edit button"/>
                        </button>
                    </div>
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
