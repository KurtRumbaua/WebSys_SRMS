import React, { useState } from "react";
import "../../styles/enroll-students.css"; // Make sure to import the CSS file
import AdminHeader from "../../components/admin-header";
import STESFooter from "../../components/footer";

function EnrollStudents() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAddEmployeePopupOpen, setIsAddEmployeePopupOpen] = useState(false);
  
    // Function to toggle pop-up visibility and set selected enrollee
    const togglePopup = (employee) => {
      setSelectedEmployee(employee);
      setIsPopupOpen(!isPopupOpen);
    };

      // Function to toggle add employee pop-up visibility
  const toggleAddEmployeePopup = () => {
    setIsAddEmployeePopupOpen(!isAddEmployeePopupOpen);
  };
  return (
    <>
      <div className="admin-container">
        <AdminHeader />
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
          <tr onClick={() => togglePopup({ id: 1, lastName: "Lorem Ipsum", firstName: "Lorem Ipsum", field: "Lorem" })}>
              <td>1</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem</td>
            </tr>
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

      <button
        className="admin-post-button"
        onClick={() => toggleAddEmployeePopup()}>
        Add Employee
      </button>
      <div>
        <STESFooter />
      </div>
    </>
  );
}

export default EnrollStudents;