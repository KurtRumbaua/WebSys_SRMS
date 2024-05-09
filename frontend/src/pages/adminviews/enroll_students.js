import React from "react";
import "../../styles/enroll-students.css"; // Make sure to import the CSS file
import logo from "../../assets/Schoollogo.png";
import { NavLink } from "react-router-dom";

function EnrollStudents() {
  return (
    <>
      <div className="admin-container">
        <header className="admin-header">
          <img className="home-logo" src={logo} alt="School Logo" />
          <nav class="nav">
            <ul>
              <li>
                <a href="/*">Students</a>
              </li>
              <li>
                <a href="/*">Employees</a>
              </li>
              <li>
                <NavLink to="/enroll-student" activeClassName="active">
                  Enrollment
                </NavLink>
              </li>
              <li>
                <a href="/*">Class Management</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="enroll-students">
      <div className="admin-content">
        <h1>Enrollees</h1>
        <table>
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
            <tr>
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
      <div>
        <footer className="admin-footer">
          <p>Sta. Teresita Elementary School © 2023. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default EnrollStudents;
