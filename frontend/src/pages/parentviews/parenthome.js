import React, { Component } from 'react';
import "../../styles/parenthome.css";
import logo from "../../assets/Schoollogo.png";
import ParentHeader from '../../components/parent-header';
import STESFooter from '../../components/footer';

class ParentHome extends Component {
    API_URL = "http://localhost:7000/";

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            show_value: false,
            show_grades: false
        };

        this.grades = {}
    }

    getSubjectGrade(subject, studentNumber) {
        // Fetch the grades for the subject
    
        console.log("STUDNUM:", studentNumber);
        fetch("http://localhost:7000/grade/view/subject", {
            headers: {
                'studentNumber': studentNumber,
                'subject': subject
            },
            method: "GET",
        })
        .then(response => response.json())
        .then(message => {
            message = message['data'];
                this.grades[subject] = message;
          console.log("THIS IS SPECIFIC GRADE in message: ", message);
            if (message.length == 0){
                this.grades[subject] = {
                    0:{
                    'assignment_1': "N/G",
                    'assignment_2': "N/G",
                    'written_task': "N/G",
                    'final_exam': "N/G" 
                    }
                };
            }
        })
        .catch(error => console.log(error));
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

            let subjects = ["SCIENCE", "MATH", "ENGLISH", "FILIPINO", "HISTORY", "P.E", "HEALTH", "MUSIC", "ARTS", "HEALTH", "VALUES"];
            let studentNumber = message['studentNumber'];
            for (let i = 0; i < subjects.length; i++) {
                this.grades[subjects[i]] =  this.getSubjectGrade(subjects[i], studentNumber);
            }

        })
        .catch(error => console.log(error));

        this.sleep(1000).then(() => {
          console.log("THIS IS GRADE: ", this.grades);
        });


        this.sleep(2000).then(() => {
            this.setState({show_grades: true});
        });

    }

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }



    render() {
        return (
            <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <div className="home-container">
                <ParentHeader/>
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
                                    <td class="parent-td">{this.state.show_grades ? this.grades['ENGLISH'][0]['assignment_1'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 2</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['ENGLISH'][0]['assignment_2'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Written Task</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['ENGLISH'][0]['written_task'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Final Exam</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['ENGLISH'][0]['final_exam'] : "Loading..."}</td>
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
                                    <td class="parent-td">{this.state.show_grades ? this.grades['FILIPINO'][0]['assignment_1'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 2</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['FILIPINO'][0]['assignment_2'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Written Task</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['FILIPINO'][0]['written_task'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Final Exam</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['FILIPINO'][0]['final_exam'] : "Loading..."}</td>
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
                                    <td class="parent-td">{this.state.show_grades ? this.grades['HISTORY'][0]['assignment_1'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 2</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['HISTORY'][0]['assignment_2'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Written Task</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['HISTORY'][0]['written_task'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Final Exam</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['HISTORY'][0]['final_exam'] : "Loading..."}</td>
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
                                    <td class="parent-td">{this.state.show_grades ? this.grades['MATH'][0]['assignment_1'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 2</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['MATH'][0]['assignment_2'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Written Task</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['MATH'][0]['written_task'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Final Exam</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['MATH'][0]['final_exam'] : "Loading..."}</td>
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
                                    <td class="parent-td">{this.state.show_grades ? this.grades['SCIENCE'][0]['assignment_1'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 2</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['SCIENCE'][0]['assignment_2'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Written Task</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['SCIENCE'][0]['written_task'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Final Exam</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['SCIENCE'][0]['final_exam'] : "Loading..."}</td>
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
                                    <td class="parent-td">{this.state.show_grades ? this.grades['P.E'][0]['assignment_1'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 2</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['P.E'][0]['assignment_2'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Written Task</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['P.E'][0]['written_task'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Final Exam</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['P.E'][0]['final_exam'] : "Loading..."}</td>
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
                                    <td class="parent-td">{this.state.show_grades ? this.grades['HEALTH'][0]['assignment_1'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 2</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['HEALTH'][0]['assignment_2'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Written Task</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['HEALTH'][0]['written_task'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Final Exam</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['HEALTH'][0]['final_exam'] : "Loading..."}</td>
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
                                    <td class="parent-td">{this.state.show_grades ? this.grades['MUSIC'][0]['assignment_1'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 2</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['MUSIC'][0]['assignment_2'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Written Task</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['MUSIC'][0]['written_task'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Final Exam</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['MUSIC'][0]['final_exam'] : "Loading..."}</td>
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
                                    <td class="parent-td">{this.state.show_grades ? this.grades['ARTS'][0]['assignment_1'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Assigment 2</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['ARTS'][0]['assignment_2'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Written Task</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['ARTS'][0]['written_task'] : "Loading..."}</td>
                                </tr>
                                <tr class="parent-tr">
                                    <td class="parent-td">Final Exam</td>
                                    <td class="parent-td">{this.state.show_grades ? this.grades['ARTS'][0]['final_exam'] : "Loading..."}</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <STESFooter/>
              </div>
            </>
          );        
    }
}

export default ParentHome;
