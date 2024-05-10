import React, { useState } from "react";
import "../../styles/enroll-students.css"; // Make sure to import the CSS file
import logo from "../../assets/Schoollogo.png";
import { NavLink } from "react-router-dom";
import AdminHeader from "../../components/admin-header";
import STESFooter from "../../components/footer";

function EnrollStudents() {
  const [isAddTransactionPopupOpen, setIsAddTransactionPopupOpen] =
    useState(false);

  // Function to toggle add transaction pop-up visibility
  const toggleAddTransactionPopup = () => {
    setIsAddTransactionPopupOpen(!isAddTransactionPopupOpen);
  };

  return (
    <>
      <div className="admin-container">
        <AdminHeader />
      </div>
      <div className="enroll-students">
        <div className="admin-content">
          <h1>Transaction Database</h1>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Transaction Type</th>
                <th>Transaction Description</th>
                <th>Transaction Date</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Lorem Ipsum</td>
                <td>Lorem Ipsum</td>
                <td>Lorem</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        {/* Add employee pop-up */}
        {isAddTransactionPopupOpen && (
          <div className="admin-popup-container">
            <div className="admin-popup-content">
              <h2>Add Transaction Record</h2>
              <div className="form-group">
                <label htmlFor="transactionType">Transaction Type:</label>
                <select id="transactionType" name="transactionType">
                  <option value="incoming">Incoming</option>
                  <option value="outgoing">Outgoing</option>
                </select>
              </div>
              <form clasName="admin-form-employee">
                <div className="form-group">
                  <label htmlFor="lastName">Transaction Description:</label>
                  <input type="text" id="lastName" name="lastName" />
                </div>
                <div className="form-group">
                  <label htmlFor="firstName">Cost:</label>
                  <input type="text" id="firstName" name="firstName" />
                </div>
                <button type="submit">Submit</button>
              </form>
              <button onClick={() => toggleAddTransactionPopup()}>Close</button>
            </div>
          </div>
        )}
        <button
          className="admin-post-button"
          onClick={() => toggleAddTransactionPopup()}
        >
          Add Transaction
        </button>
        <h3>Total Incoming:</h3>
        <h3>Total Outgoing:</h3>
      </div>
      <div>
        <STESFooter />
      </div>
    </>
  );
}

export default EnrollStudents;
