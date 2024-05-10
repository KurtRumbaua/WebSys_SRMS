import "../styles/enroll-students.css";
import { useState } from "react";
import logo from "../assets/Schoollogo.png";
import { NavLink } from "react-router-dom";

function AdminHeader(){

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen); // Toggles the dropdown state between true and false
    };

    return(
        <>
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
        </>
    )
}

export default AdminHeader;