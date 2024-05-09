import React from 'react';
import '../styles/teacher-views.css'; // Import CSS file for styling

function TeacherDashboard() {
  return (
    <div className="teacher-dashboard">
      {/* Main Content */}
<div className="main-content">
    <h1 className="dashboard-title">Welcome, Teacher Juan!</h1>

    {/* Card Table */}
    <div className="card-table-container">
        {[1, 2, 3, 4, 5, 6].map((grade) => (
            <div key={`grade-${grade}`} className="card">
                <h2 className="card-title">Grade {grade}</h2>
                <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt.</p>
                <a href="student-roster" className="class-link">Go to Grade {grade} Classes</a>
            </div>
        ))}
    </div>
</div>
      
      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">Sta. Teresita Elementary School 2023. All Rights Reserved.</p>
      </footer>
    </div>
  );
}


export default TeacherDashboard;