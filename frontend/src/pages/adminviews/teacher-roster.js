import React, { useState } from 'react';
import '../styles/teacher-roster.css'; // Import CSS file for styling

function TeachersPage() {
    const [teachers, setTeachers] = useState([
      { id: 1, firstName: 'John', middleName: 'Doe', lastName: 'Smith', fields: 'Mathematics, Science' },
      { id: 2, firstName: 'Jane', middleName: 'Marie', lastName: 'Johnson', fields: 'English, History' },
      { id: 3, firstName: 'Robert', middleName: 'Lee', lastName: 'Brown', fields: 'Physics, Chemistry' },
      // Add more teachers as needed
    ]);
  
    return (
      <div className="teachers-page">
        <h1 className="page-title">Teachers Information</h1>
        <div className="teachers-table-container">
          <table className="teachers-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Fields</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.id}</td>
                  <td>{teacher.firstName}</td>
                  <td>{teacher.middleName}</td>
                  <td>{teacher.lastName}</td>
                  <td>{teacher.fields}</td>
                  <td><button className="assign-button">Assign to Subject</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default TeachersPage;