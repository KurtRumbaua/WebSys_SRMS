import "../styles/enroll-students.css";
import { useState } from "react";
import logo from "../assets/Schoollogo.png";
import { NavLink } from "react-router-dom";

function TeacherHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggles the dropdown state between true and false
  };

  return (
    <>
      <header className="admin-header">
        <img className="home-logo" src={logo} alt="School Logo" />
        <nav className="admin-nav">
          <ul>
            <li>
              <NavLink to="/parenthome" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/studentinfo" activeClassName="active">
                Student Information
              </NavLink>
            </li>
            <li>
              <NavLink to="/parentenrollment" activeClassName="active">
                Enrollment
              </NavLink>
            </li>
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
    </>
  );
}

export default TeacherHeader;
