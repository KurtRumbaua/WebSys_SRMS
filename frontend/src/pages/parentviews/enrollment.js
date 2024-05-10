import React, { Component } from 'react';
import "../../styles/parenthome.css";
import logo from "../../assets/Schoollogo.png";
import editbutton from "../../assets/edit-button.png"




class Enrollment extends Component {
    API_URL = "http://localhost:7777/";

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            show_value: false,
        };


        this.handleSubmit = this.handleSubmitFunc.bind(this);
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

    handleSubmitFunc(event){
        event.preventDefault();

        // get the data from the forms
        const data = new FormData(event.target);

        let user_id = sessionStorage.getItem("user_id");
        
        // Simultaneously get parent and student data
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
            console.log("student data: ", message);
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
                      <li><a href="/parentenrollment">Enrollment</a></li>
                    </ul>
                  </nav>
                </header>
                <div className ="home-content">
                <div className="parentenrollment">
                    <h2>Enrollment Status: Pending</h2>
                    <div className="parent-form-container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="parent-parent-form-row">
                                <label htmlFor="gradeLevel" className="parent-form-label">Grade Level:</label>
                                <select name="gradeLevel" id="gradeLevel">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                </select>
                            </div>
                            <div className="parent-form-row">
                                <label htmlFor="enrolleeType" className="parent-form-label">Enrollee Type:</label>
                                <select name="enrolleeType" id="enrolleeType">
                                <option value="transferee">Transferee</option>
                                <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="parent-form-row">
                                <label htmlFor="form137" className="form137">Form 137  Report Card:</label>
                                <input type="text" name="form137" id="form137" />
                            </div>
                            <div className="parent-form-row">
                                <label htmlFor="birthCerth" className="birthCerth">Birth Certificate:</label>
                                <input type="text" name="birthCerth" id="birthCerth" />
                            </div>
                            <div className="parent-form-row">
                                <label htmlFor="GMC" className="GMC">GMC:</label>
                                <input type="text" name="GMC" id="GMC" />
                            </div>
                            <div className="parent-form-row">
                                <label htmlFor="proofPayment" className="GMC">Proof Of Payment:</label>
                                <input type="text" name="proofPayment" id="proofPayment" />
                            </div>
                        <button class="parent-button" type="parent-submit">Submit</button>
                        </form>
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

export default Enrollment;
