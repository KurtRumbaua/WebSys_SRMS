import React, {useEffect ,useState } from 'react';
import '../../styles/enroll-students.css';
import logo from '../../assets/Schoollogo.png';
import { NavLink } from 'react-router-dom';

function EnrollStudents() {

    const [teachers, setTeachers] = useState([
        { id: 1, lastName: "Doe", firstName: "John", field: "Math" },
    ]);

    const [editFormData, setEditFormData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // Simulate fetching data
    useEffect(() => {
        //const fetchData = async () => {
        //    // Simulated fetch from an API
        //    let result = await fetch('http://localhost:7000/student/basic')
        //        .then(response => response.json())
        //        .catch(error => console.error('Error:', error));
        //    result = result['data'];
        //    for (let i = 0; i < result.length; i++) {
        //        setStudents(oldArray => [...oldArray, result[i]]);
        //    }
        //};

        //fetchData();
    }, []); // Empty dependency array means this effect runs only once after the initial


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
        <h1>Employee Database</h1>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Enrollee No.</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Field</th>
            </tr>
          </thead>
          <tbody>
            {
              teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.id}</td>
                  <td>{teacher.lastName}</td>
                  <td>{teacher.firstName}</td>
                  <td>{teacher.field}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
    </>
   );
}

export default EnrollStudents;
