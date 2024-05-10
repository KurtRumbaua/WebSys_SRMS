import React, {useEffect ,useState } from 'react';
import "../../styles/enroll-students.css"; // Make sure to import the CSS file
import logo from "../../assets/Schoollogo.png";
import { NavLink } from "react-router-dom";



function EnrollStudents() {

    const [transactions, setTransactions] = useState([
        { id: 1, transactionType: "incoming", transactionDescription: "Payment for tuition", transactionDate: "2023-01-01", cost: 1000 },
    ]);

    const [enrollments, setEnrollments] = useState([
        { id: 1, lastName: "Doe", firstName: "John", gradeLevel: "10", enrollmentStatus: "Enrolled" },
    ]);


    const [editFormData, setEditFormData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // Simulate fetching data
    useEffect(() => {
        const fetchData = async () => {
            // Simulated fetch from an API
            let result = await fetch('http://localhost:7000/student/all')
                .then(response => response.json())
                .catch(error => console.error('Error:', error));
            result = result['data'];
            let id_count = 2;
            for (let i = 0; i < result.length; i++) {
                let newResult = {
                  id: id_count,
                  lastName: result[i].lastName,
                  firstName: result[i].firstName,
                  gradeLevel: result[i].gradeLevel,
                  enrollmentStatus: result[i].enrollmentStatus
                }
                setEnrollments(oldArray => [...oldArray, newResult]);
                id_count++;
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs only once after the initial


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
            {
              enrollments.map(enrollment => (
                <tr key={enrollment.id}>
                  <td>{enrollment.id}</td>
                  <td>{enrollment.lastName}</td>
                  <td>{enrollment.firstName}</td>
                  <td>{enrollment.gradeLevel}</td>
                  <td>{enrollment.enrollmentStatus}</td>
                </tr>
              ))
            }
            {/* Repeat the <tr> block for more entries */}
          </tbody>
        </table>
      </div>
      </div>
    </>
   );
}

export default EnrollStudents;
