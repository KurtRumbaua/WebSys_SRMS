import React, {useState} from "react";
import "../../styles/enroll-students.css"; // Make sure to import the CSS file
import logo from "../../assets/Schoollogo.png";
import { NavLink } from "react-router-dom";

function EnrollStudents() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedEnrollee, setSelectedEnrollee] = useState(null);

  // Function to toggle pop-up visibility and set selected enrollee
  const togglePopup = (enrollee) => {
    setSelectedEnrollee(enrollee);
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <>
      <div className="admin-container">
        <header className="admin-header">
          <img className="home-logo" src={logo} alt="School Logo" />
          <nav class="nav">
            <ul>
              <li>
              <NavLink to="/student-database" activeClassName="active">
                  Students
                </NavLink>
              </li>
              <li>
              <NavLink to="/employee-database" activeClassName="active">
                  Employees
                </NavLink>
              </li>
              <li>
                <NavLink to="/enroll-student" activeClassName="active">
                  Enrollment
                </NavLink>
              </li>
              <li>
              <NavLink to="/class-management" activeClassName="active">
                  Class Management
                </NavLink>
              </li>
              <NavLink to="/financial-management" activeClassName="active">
                  Financial Management
                </NavLink>
            </ul>
          </nav>
        </header>
      </div>
      <div className="enroll-students">
      <div className="admin-content">
        <h1>Enrollees</h1>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Enrollee No.</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Grade Level</th>
              <th>Enrollment Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row (you can add more or integrate with data fetching logic) */}
            <tr onClick={() => togglePopup({ id: 1, lastName: "Lorem Ipsum", firstName: "Lorem Ipsum", field: "Lorem" })}>
              <td>1</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem</td>
              <td>Lorem Ipsum</td>
            </tr>
            {/* Repeat the <tr> block for more entries */}
          </tbody>
        </table>
      </div>
      </div>
      {isPopupOpen && (
        <div className="admin-popup-container">
          <div className="admin-popup-content">
            <h2>Enrollee Details</h2>
            <p>Last Name:</p>
            <p>First Name:</p>
            <p>Grade Level:</p>
            <p>Birth Date:</p>
            <p>Contact No:</p>
            <p>Email:</p>
            <p>Address:</p>
            <p>Enrollee Type: </p>
            <p>Form138:</p>
            <p>Birth Certificate: </p>
            <p>GMC</p>
            <p>Proof of Payment</p>
            <div className="form-group">
              <label htmlFor="section">Section:</label>
              <select id="section" name="section">
              <option value="imus">Incoming</option>
              <option value="dasmarinas">Outgoing</option>
              </select>
          </div>
            <div className="form-group">
              <label htmlFor="enrollmentstatus">In Progress:</label>
              <select id="enrollmentstatus" name="enrollmentstatus">
              <option value="inprogress">In-PRogress</option>
              <option value="accepted">Accepted</option>
              </select>
          </div>
            <button>Confirm</button>
            <button onClick={() => togglePopup(null)}>Close</button>
          </div>
        </div>
      )}
      <div>
        <footer className="admin-footer">
          <p>Sta. Teresita Elementary School © 2023. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default EnrollStudents;
