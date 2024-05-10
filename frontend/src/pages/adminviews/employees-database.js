import React, {useEffect ,useState } from 'react';
import '../../styles/enroll-students.css';
import logo from '../../assets/Schoollogo.png';
import { NavLink } from 'react-router-dom';
import AdminHeader from "../../components/admin-header";
import STESFooter from "../../components/footer";

function EnrollStudents() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAddEmployeePopupOpen, setIsAddEmployeePopupOpen] = useState(false);

      // Function to toggle pop-up visibility and set selected enrollee
      const togglePopup = (employee) => {
        console.log("sdasda");
        setSelectedEmployee(employee);
        setIsPopupOpen(!isPopupOpen);
      };

      const handleEditClick = (e) => { // Pass the event argument explicitly
        e.preventDefault(); // Prevent default form submission
        setIsEditing(!isEditing);
      };      

        // Function to toggle add employee pop-up visibility
    const toggleAddEmployeePopup = () => {
      setIsAddEmployeePopupOpen(!isAddEmployeePopupOpen);
    };

    const [teachers, setTeachers] = useState([
        { id: 1, lastName: "Doe", firstName: "John", field: "Math" },
    ]);

    const [editFormData, setEditFormData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // Simulate fetching data
    useEffect(() => {
        const fetchData = async () => {
            // Simulated fetch from an API
            let result = await fetch('http://localhost:7000/teacher/view/basic')
                .then(response => response.json())
                .catch(error => console.error('Error:', error));
            result = result['data'];

            let id_count = 2;
            for (let i = 0; i < result.length; i++) {
              result[i].id = id_count;
                setTeachers(oldArray => [...oldArray, result[i]]);
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
                <tr onClick={() => togglePopup()} key={teacher.id}>
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
                {/* Pop-up window */}
                {isPopupOpen && (
        <div className="admin-popup-container">
          <div className="admin-popup-content">
            <h2>Employee Details</h2>
            <p>Last Name:</p>
            <p>First Name:</p>
            <p>ID:</p>
            <p>Field:</p>
            <p>Birth Date:</p>
            <p>Contact No:</p>
            <p>Email:</p>
            <p>Address:</p>
            <button>Edit</button>
            <button>Delete</button>
            <button onClick={() => togglePopup(null)}>Close</button>
          </div>
        </div>
      )}
        {/* Add employee pop-up */}
        {isAddEmployeePopupOpen && (
    <div className="admin-popup-container">
        <div className="admin-popup-content">
        <h2>Add Employee</h2>
        <form clasName="admin-form-employee">
            <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" />
            </div>
            <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" />
            </div>
            <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" name="id" />
            </div>
            <div className="form-group">
            <label htmlFor="field">Field:</label>
            <input type="text" id="field" name="field" />
            </div>
            <div className="form-group">
            <label htmlFor="birthDate">Birth Date:</label>
            <input type="date" id="birthDate" name="birthDate" />
            </div>
            <div className="form-group">
            <label htmlFor="contactNo">Contact No:</label>
            <input type="text" id="contactNo" name="contactNo" />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" />
            </div>
            <button type="submit">Submit</button>
        </form>
        <button onClick={() => toggleAddEmployeePopup()}>Close</button>
        </div>
    </div>
    )}

        {/* Pop-up window */}
        {isPopupOpen && (
      <div className="admin-popup-container">
        <div className="admin-popup-content">
          <h2>Employee Details</h2>
          <form>
            <p>Last Name:</p>
            <input
              type="text"
              value={selectedEmployee?.lastName || ''}
              readOnly={!isEditing} // Read-only if not editing
            />
            <p>First Name:</p>
            <input
              type="text"
              value={selectedEmployee?.firstName || ''}
              readOnly={!isEditing}
            />
            <p>ID:</p>
            <input
              type="text"
              value={selectedEmployee?.id || ''}
              readOnly={true} // Always read-only for ID
            />
            <p>Field:</p>
            <input
              type="text"
              value={selectedEmployee?.field || ''}
              readOnly={!isEditing}
            />
            <p>Birth Date:</p>
            <input
              type="text"
              value={selectedEmployee?.birthDate || ''}
              readOnly={!isEditing}
            />
            <p>Contact No:</p>
            <input
              type="text"
              value={selectedEmployee?.contactNo || ''}
              readOnly={!isEditing}
            />
            <p>Email:</p>
            <input
              type="email"
              value={selectedEmployee?.email || ''}
              readOnly={!isEditing}
            />
            <p>Address:</p>
            <textarea
              value={selectedEmployee?.address || ''}
              readOnly={!isEditing}
            />
            <div className="button-container">
            <button onClick={handleEditClick}>Edit</button>
            <button type="submit" disabled={!isEditing}>Save</button> 
            <button disabled>Delete</button>
            </div>
          </form>
          <button onClick={() => togglePopup(null)}>Close</button>
        </div>
      </div>
    )}

      <button
        className="admin-post-button"
        onClick={() => toggleAddEmployeePopup()}>
        Add Employee
      </button>
      <STESFooter/>
    </>
   );
}

export default EnrollStudents;
