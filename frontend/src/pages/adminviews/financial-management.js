import React, {useEffect ,useState } from 'react';
import '../../styles/enroll-students.css';
import logo from '../../assets/Schoollogo.png';
import { NavLink } from 'react-router-dom';

function TransactionDatabase() {


  const [isAddTransactionPopupOpen, setIsAddTransactionPopupOpen] =
  useState(false);

// Function to toggle add transaction pop-up visibility
const toggleAddTransactionPopup = () => {
  setIsAddTransactionPopupOpen(!isAddTransactionPopupOpen);
};

    const [transactions, setTransactions] = useState([
        { id: 1, transactionType: "incoming", transactionDescription: "Payment for tuition", transactionDate: "2023-01-01", cost: 1000 },
    ]);

    const [editFormData, setEditFormData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // Simulate fetching data
    useEffect(() => {
        const fetchData = async () => {
            // Simulated fetch from an API
            let result = await fetch('http://localhost:7000/transaction/view/all')
                .then(response => response.json())
                .catch(error => console.error('Error:', error));
            result = result['data'];
            for (let i = 0; i < result.length; i++) {
                console.log("Result: ", result[i]);
                let tempResult = {
                    id: result[i]._id,
                    transactionType: result[i].transactionType,
                    transactionDescription: result[i].transactionDescription,
                    transactionDate: result[i].transactionDate,
                    cost: result[i]['amount']
                };
                console.log("Temp Result: ", tempResult);
                setTransactions(oldArray => [...oldArray, tempResult]);
            }
        };

        fetchData();
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
              {
                transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.transactionType}</td>
                    <td>{transaction.transactionDescription}</td>
                    <td>{transaction.transactionDate}</td>
                    <td>{transaction.cost}</td>
                  </tr>
                ))
              }
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
    </>
   );
}

export default TransactionDatabase;
