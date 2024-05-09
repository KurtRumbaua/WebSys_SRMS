import React, { Component } from 'react';
import "../../styles/parenthome.css";
import logo from "../../assets/Schoollogo.png";

class ParentHome extends Component {
    API_URL = "http://localhost:7000/";

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
            console.log(this.state.data);
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <div className="home-container">
                <header className="home-header">
                  <img className="home-logo" src={logo} alt="School Logo" />
                  <nav class = "nav">
                    <ul>
                      <li><a href="/parenthome">Home</a></li>
                      <li><a href="/studentprofile">Student Information</a></li>
                      <li><a href="">Enrollment</a></li>
                    </ul>
                  </nav>
                </header>
                <div className ="home-content">
                    <div className="home-leftcontainer">
                        <div className="home-studentsummary">
                            <h1>
                                {
                                    this.state.show_value ? this.state.data['firstName'] + 
                                    " " + this.state.data['lastName'] : "Loading..."
                                }
                            </h1>
                            <p>
                                {this.state.show_value ? this.state.data['gradeLevel'] : "Loading..."}
                                {this.state.show_value ? this.state.data['gradeLevel'] === 1  ? "st" : this.state.data['gradeLevel'] === 2 ? "nd" : this.state.data['gradeLevel'] === 3 ? "rd" : "th" : "Loading..."} Grade
                            </p>
                            <p>{this.state.show_value? this.state.data['enrollmentStatus'] : "Loading..."}</p>
                        </div>
                        <div className="home-classannouncement">
                            <h1>Class Announcements:</h1>
                            <h2>May 05, 2024</h2>
                            <p>asdsadsadsadsadsadsadsadsadasdsadsasd</p>
                        </div>
                    </div>
                    <div className="home-rightcontainer">
                        <div className="home-subjectgrade">
                            <h1>
                                English
                            </h1>
                            <h3>
                                Final Grade: 87.5
                            </h3>
                            <table class="parent-table">
                            <thead class="parent-th">
                                <tr class="parent-tr">
                                    <th class="parent-th">Category</th>
                                    <th class="parent-th">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 1</td>
                                    <td class="parent-td">Row 1</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 2</td>
                                    <td class="parent-td">Row 2</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Written Task</td>
                                    <td class="parent-td">Row 3</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Final Exam</td>
                                    <td class="parent-td">Row 3</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="home-subjectgrade">
                            <h1>
                                Filipino
                            </h1>
                            <h3>
                                Final Grade: 87.5
                            </h3>
                            <table class="parent-table">
                            <thead class="parent-th">
                                <tr class="parent-tr">
                                    <th class="parent-th">Category</th>
                                    <th class="parent-th">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 1</td>
                                    <td class="parent-td">Row 1</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 2</td>
                                    <td class="parent-td">Row 2</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Written Task</td>
                                    <td class="parent-td">Row 3</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Final Exam</td>
                                    <td class="parent-td">Row 3</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="home-subjectgrade">
                            <h1>
                                History
                            </h1>
                            <h3>
                                Final Grade: 87.5
                            </h3>
                            <table class="parent-table">
                            <thead class="parent-th">
                                <tr class="parent-tr">
                                    <th class="parent-th">Category</th>
                                    <th class="parent-th">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 1</td>
                                    <td class="parent-td">Row 1</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 2</td>
                                    <td class="parent-td">Row 2</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Written Task</td>
                                    <td class="parent-td">Row 3</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Final Exam</td>
                                    <td class="parent-td">Row 3</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="home-subjectgrade">
                            <h1>
                                Mathematics
                            </h1>
                            <h3>
                                Final Grade: 87.5
                            </h3>
                            <table class="parent-table">
                            <thead class="parent-th">
                                <tr class="parent-tr">
                                    <th class="parent-th">Category</th>
                                    <th class="parent-th">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 1</td>
                                    <td class="parent-td">Row 1</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 2</td>
                                    <td class="parent-td">Row 2</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Written Task</td>
                                    <td class="parent-td">Row 3</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Final Exam</td>
                                    <td class="parent-td">Row 3</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="home-subjectgrade">
                            <h1>
                                Science
                            </h1>
                            <h3>
                                Final Grade: 87.5
                            </h3>
                            <table class="parent-table">
                            <thead class="parent-th">
                                <tr class="parent-tr">
                                    <th class="parent-th">Category</th>
                                    <th class="parent-th">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 1</td>
                                    <td class="parent-td">Row 1</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 2</td>
                                    <td class="parent-td">Row 2</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Written Task</td>
                                    <td class="parent-td">Row 3</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Final Exam</td>
                                    <td class="parent-td">Row 3</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="home-subjectgrade">
                            <h1>
                                P.E
                            </h1>
                            <h3>
                                Final Grade: 87.5
                            </h3>
                            <table class="parent-table">
                            <thead class="parent-th">
                                <tr class="parent-tr">
                                    <th class="parent-th">Category</th>
                                    <th class="parent-th">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 1</td>
                                    <td class="parent-td">Row 1</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 2</td>
                                    <td class="parent-td">Row 2</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Written Task</td>
                                    <td class="parent-td">Row 3</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Final Exam</td>
                                    <td class="parent-td">Row 3</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="home-subjectgrade">
                            <h1>
                                Health
                            </h1>
                            <h3>
                                Final Grade: 87.5
                            </h3>
                            <table class="parent-table">
                            <thead class="parent-th">
                                <tr class="parent-tr">
                                    <th class="parent-th">Category</th>
                                    <th class="parent-th">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 1</td>
                                    <td class="parent-td">Row 1</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 2</td>
                                    <td class="parent-td">Row 2</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Written Task</td>
                                    <td class="parent-td">Row 3</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Final Exam</td>
                                    <td class="parent-td">Row 3</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="home-subjectgrade">
                            <h1>
                                Music
                            </h1>
                            <h3>
                                Final Grade: 87.5
                            </h3>
                            <table class="parent-table">
                            <thead class="parent-th">
                                <tr class="parent-tr">
                                    <th class="parent-th">Category</th>
                                    <th class="parent-th">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 1</td>
                                    <td class="parent-td">Row 1</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 2</td>
                                    <td class="parent-td">Row 2</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Written Task</td>
                                    <td class="parent-td">Row 3</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Final Exam</td>
                                    <td class="parent-td">Row 3</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="home-subjectgrade">
                            <h1>
                                Arts
                            </h1>
                            <h3>
                                Final Grade: 87.5
                            </h3>
                            <table class="parent-table">
                            <thead class="parent-th">
                                <tr class="parent-tr">
                                    <th class="parent-th">Category</th>
                                    <th class="parent-th">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 1</td>
                                    <td class="parent-td">Row 1</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 2</td>
                                    <td class="parent-td">Row 2</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Written Task</td>
                                    <td class="parent-td">Row 3</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Final Exam</td>
                                    <td class="parent-td">Row 3</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <footer class= "home-footer">
                Sta. Teresita Elementary School © 2023. All Rights Reserved.
                </footer>
              </div>
            </>
          );        
    }
}

export default ParentHome;
