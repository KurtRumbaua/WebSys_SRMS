import React, {useEffect ,useState } from 'react';
import "../../styles/enroll-students.css"; // Make sure to import the CSS file
import logo from "../../assets/Schoollogo.png";
import { NavLink } from "react-router-dom";



function EnrollStudents() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedEnrollee, setSelectedEnrollee] = useState(null);

  // Function to toggle pop-up visibility and set selected enrollee


    const [enrollments, setEnrollments] = useState([
    ]);


    const [editFormData, setEditFormData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    
  const [melons, setMelons] = useState({
      lastName: "Doe",
      firstName: "John",
      gradeLevel: "10",
      birthdate: "2000-01-01",
      contactNumber: "123-456-7890",
      email: "doejohn@gmail.com",
      address: "123 Main St",
      enrolleeType: "New",
      form138: "Yes",
      birthCertificate: "Yes",
      gmc: "Yes",
      proofOfPayment: "Yes",
      section: "A",
      enrollmentStatus: "In Progress"
    });

    // Simulate fetching data
    useEffect(() => {
        const fetchData = async () => {
            // Simulated fetch from an API
            let result = await fetch('http://localhost:7000/student/all')
                .then(response => response.json())
                .then(message =>{
                    setEnrollments([]);
                    let result = message['data'];
                    let id_count = 1;
                    for (let i = 0; i < result.length; i++) {
                        result[i]['id'] = id_count;
                        setEnrollments(oldArray => [...oldArray, result[i]]);
                        id_count++;
                    }
                })
                .catch(error => console.error('Error:', error));
        };
        fetchData();
    }, []); // Empty dependency array means this effect runs only once after the initial

  const togglePopup = (enrollee,data) => {
    setMelons(data);
    setSelectedEnrollee(enrollee);
    setIsPopupOpen(!isPopupOpen);
  };

  const submitTogglePopup = (data) => {
    setIsPopupOpen(!isPopupOpen);
  }



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
                <tr onClick={() => togglePopup(null, enrollment)} key={enrollment.id}>
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
      {isPopupOpen && (
        <div className="admin-popup-container">
          <div className="admin-popup-content">
            <h2>Enrollee No. {melons._id}</h2>
            <p>Last Name: {melons.lastName}</p>
            <p>First Name: {melons.firstName}</p>
            <p>Grade Level: {melons.gradeLevel}</p>
            <p>Birth Date: {melons.birthdate}</p>
            <p>Contact No: {melons.contactNumber}</p>
            <p>Email: {melons.email}</p>
            <p>Address: {melons.address}</p>
            <p>Enrollee Type: {melons.enrolleeType}</p>
            <p>Form138: {melons.form138}</p>
            <p>Birth Certificate: {melons.birthCertificate}</p>
            <p>GMC: {melons.gmc}</p>
            <p>Proof of Payment: {melons.proofOfPayment}</p>
            <div className="form-group">
              <label htmlFor="section">Section:</label>
              <select id="section" name="section">
                <option value="imus">Incoming</option>
                <option value="dasmarinas">Outgoing</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="enrollmentstatus">In Progress:</label>
              <select id="enrollmentstatus" name="enrollmentstatus">
                <option value="inprogress">In-PRogress</option>
                <option value="accepted">Accepted</option>
              </select>
            </div>
            <button>Confirm</button>
            <button onClick={() => submitTogglePopup(null)}>Close</button>
          </div>
        </div>
      )}

      </div>
    </>
   );
}

export default EnrollStudents;
