import React from 'react';
import '../../styles/teacher-roster.css'; // Import CSS file for styling
import logo from "../../assets/Schoollogo.png";
import { NavLink } from "react-router-dom";
import TeacherHeader from '../../components/teacher-header';
import STESFooter from '../../components/footer';

function TeacherClasses() {
  return (

    <div className="teacher-dashboard">
      <div>
        <TeacherHeader />
        </div>     
            {/* Main Content */}
            <div className="teacher-main-content">
            <h1 className="teacher-dashboard-title">Welcome, Teacher Juan!</h1>
                {/* Card Table */}
                <div className="admin-card-table-container">
                    {[1, 2, 3, 4, 5, 6].map((grade) => (
                        <div key={`grade-${grade}`} className="card">
                            <h2 className="teacher-card-title">Grade {grade}</h2>
                            <p className="teacher-card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt.</p>
                            <a href="student-roster" className="class-link">Go to Grade {grade} Classes</a>
                        </div>
                    ))}
                </div>
            </div>  
                  {/* Footer */}
            <div>
              <STESFooter />
            </div>
    </div>
    
  );
}


export default TeacherClasses;