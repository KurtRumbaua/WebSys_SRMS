import React, { Component } from 'react';
import "../../styles/parenthome.css";
import logo from "../../assets/Schoollogo.png";
import editbutton from "../../assets/edit-button.png"
import ParentHeader from '../../components/parent-header';
import STESFooter from '../../components/footer';

class Enrollment extends Component {
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
                <ParentHeader />
                <div className ="home-content">
                <div className="parentenrollment">
                    <h2>Enrollment Status: Pending</h2>
                    <div className="parent-form-container">
                        <form>
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
                <STESFooter />
              </div>
            </>
        );
    }

}    

export default Enrollment;
