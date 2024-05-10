import React, {useEffect ,useState } from 'react';
import "../../styles/enroll-students.css"; // Make sure to import the CSS file
import logo from "../../assets/Schoollogo.png";
import { NavLink } from "react-router-dom";
import AdminHeader from "../../components/admin-header";
import STESFooter from "../../components/footer";



function EnrollStudents() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedEnrollee, setSelectedEnrollee] = useState(null);

  // Function to toggle pop-up visibility and set selected enrollee
  const togglePopup = (enrollee) => {
    setSelectedEnrollee(enrollee);
    setIsPopupOpen(!isPopupOpen);
  };

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
      <AdminHeader/>
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
                <tr onClick={() => togglePopup()} key={enrollment.id}>
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
            <h2>Enrollee Details</h2>
            <p>Last Name:</p>
            <p>First Name:</p>
            <p>Grade Level:</p>
            <p>Birth Date:</p>
            <p>Contact No:</p>
            <p>Email:</p>
            <p>Address:</p>
            <p>Enrollee Type: </p>
            <p>Form138:</p>
            <p>Birth Certificate: </p>
            <p>GMC</p>
            <p>Proof of Payment</p>
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
            <button onClick={() => togglePopup(null)}>Close</button>
          </div>
        </div>
      )}
      <STESFooter/>
      </div>
    </>
   );
}

export default EnrollStudents;
