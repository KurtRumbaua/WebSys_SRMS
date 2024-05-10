import React, { useState } from 'react';
import '../../styles/class-management.css'; // Import CSS file for styling
import { NavLink } from "react-router-dom";
import logo from "../../assets/Schoollogo.png";

function ClassManagementPage() {
  const [selectedGrade, setSelectedGrade] = useState('');
  const subjectsByGrade = {
    1: ['Math', 'Science', 'English'],
    2: ['Math', 'Science', 'Social Studies'],
    3: ['Math', 'Art', 'Music'],
    4: ['Math', 'Physical Education', 'History'],
    5: ['Math', 'Biology', 'Chemistry'],
    6: ['Math', 'Physics', 'Computer Science'],
  };

  const handleGradeChange = (e) => {
    setSelectedGrade(e.target.value);
  };

  const handleAssignClick = (grade) => {
    // Logic to handle assigning subjects for the selected grade
    console.log(`Assigning subjects for Grade ${grade}`);
    // Redirect to the teachers page
    window.location.href = '/teachers';
  };

  return (
    <div className="admin-classmanagement">
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
        </header>
      <div className="main-content">
        {/* Grade Level Dropdown */}
        <div className="grade-dropdown-container">
          <label htmlFor="grade-select">Select Grade Level:</label>
          <select id="grade-select" value={selectedGrade} onChange={handleGradeChange}>
            <option value="">Select Grade</option>
            {[1, 2, 3, 4, 5, 6].map((grade) => (
              <option key={grade} value={grade}>
                Grade {grade}
              </option>
            ))}
          </select>
        </div>

        {/* Card Table */}
        {selectedGrade && (
          <div className="admin-card-table-container">
            {subjectsByGrade[selectedGrade].map((subject) => (
              <div key={`subject-${subject}`} className="card">
                <h2 className="admin-card-title">{subject}</h2>
                <p className="admin-card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt.</p>
                <a href="/class-teacher-assign" onClick={() => handleAssignClick(selectedGrade)} className="assign-link">Assign</a>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <footer className="admin-footer">
          <p>Sta. Teresita Elementary School © 2023. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default ClassManagementPage;
