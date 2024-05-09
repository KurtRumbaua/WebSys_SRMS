import { React, useState } from "react";
import "../../styles/enroll-students.css"; // Make sure to import the CSS file
import logo from "../../assets/Schoollogo.png";
import { NavLink } from "react-router-dom";

function EnrollStudents() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggles the dropdown state between true and false
  };

  // Optionally, you can add an event listener to handle clicks outside the dropdown to close it
  return (
    <>
      <div className="admin-container">
        <header className="admin-header">
          <img className="home-logo" src={logo} alt="School Logo" />
          <nav className="admin-nav">
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
          <nav className="admin-dropdown">
            <button
              onClick={toggleDropdown}
              className="dropbtn"
              activeClassName=""
            >
              User <span className="dropdown-arrow">&#x25BC;</span>
            </button>
            {dropdownOpen && (
              <div className="dropdown-content">
                <a href="/login">Logout</a>
              </div>
            )}
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
              <tr>
                <td>1</td>
                <td>Lorem Ipsum</td>
                <td>Lorem Ipsum</td>
                <td>Lorem</td>
                <td>Lorem Ipsum</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Lorem Ipsum</td>
                <td>Lorem Ipsum</td>
                <td>Lorem</td>
                <td>Lorem Ipsum</td>
              </tr>
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
