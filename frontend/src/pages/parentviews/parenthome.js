import React, { Component } from 'react';
import "../../styles/parenthome.css";
import logo from "../../assets/Schoollogo.png";

class ParentHome extends Component {
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
                                Juan Dela Cruz
                            </h1>
                            <p>3rd Grade</p>
                            <p>Status</p>
                            <p>Age:</p>
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