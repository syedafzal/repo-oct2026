
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

function AppCRUD() {

  // ============================
  // STATE
  // ============================

  const [employees, setEmployees] = useState([]);
  const [ename, setEname] = useState('');
  const [job, setJob] = useState('');
  const [salary, setSalary] = useState('');
  const [editId, setEditId] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Number of accounts per page
  const accountsPerPage = 5;

  // Backend API
  const API = 'http://localhost:5000/employees';


  // ============================
  // READ - GET ACCOUNTS
  // ============================

  const fetchAccounts = () => {

    axios.get(API)
      .then((response) => {

        // Axios automatically converts JSON response
        // into JavaScript object/array

        setEmployees(response.data);

      })
      .catch((error) => {

        console.error('Error fetching employees:', error);

      });

  };


  // ============================
  // COMPONENT LOAD
  // ============================

  useEffect(() => {

    fetchAccounts();

  }, []);


  // ============================
  // CREATE / UPDATE
  // ============================

  const handleSubmit = (e) => {

    e.preventDefault();

    const payload = {
      ename: ename,
      salary: Number(salary),
      job: job
    };


    // ============================
    // UPDATE
    // ============================

    if (editId) {

      axios.put(
        API + '/' + editId,
        payload
      )
        .then((response) => {

          console.log('Account updated:', response.data);

          setEditId(null);

          resetForm();

          fetchAccounts();

        })
        .catch((error) => {

          console.error('Update error:', error);

        });

    }


    // ============================
    // CREATE
    // ============================

    else {

      axios.post(
        API,
        payload
      )
        .then((response) => {

          console.log('Account created:', response.data);

          resetForm();

          fetchAccounts();

          // Go to first page
          setCurrentPage(1);

        })
        .catch((error) => {

          console.error('Create error:', error);

        });

    }

  };


  // ============================
  // DELETE
  // ============================

  const handleDelete = (id) => {

    axios.delete(
      API + '/' + id
    )
      .then((response) => {

        console.log('Account deleted:', response.data);

        fetchAccounts();

        // Go to first page
        setCurrentPage(1);

      })
      .catch((error) => {

        console.error('Delete error:', error);

      });

  };


  // ============================
  // EDIT
  // ============================

  const handleEdit = (account) => {

    setEditId(account.id);

    setJob(account.job);

    setEname(account.ename);

    setSalary(account.salary);

  };


  // ============================
  // RESET FORM
  // ============================

  const resetForm = () => {

    setEname('');

    setSalary('');

    setJob('');

    setEditId(null);

  };


  // =================================================
  // PAGINATION
  // =================================================

  const totalPages = Math.ceil(
    employees.length / accountsPerPage
  );


  // =================================================
  // useMemo
  // =================================================

  /*
    useMemo remembers the calculated result.

    It recalculates currentAccounts when:

    1. accounts changes
    2. currentPage changes
  */

  const currentAccounts = useMemo(() => {

    console.log('Calculating current page accounts...');

    const startIndex =
      (currentPage - 1) * accountsPerPage;

    const endIndex =
      startIndex + accountsPerPage;

    return employees.slice(
      startIndex,
      endIndex
    );

  }, [employees, currentPage]);


  // ============================
  // NEXT PAGE
  // ============================

  const nextPage = () => {

    if (currentPage < totalPages) {

      setCurrentPage(currentPage + 1);

    }

  };


  // ============================
  // PREVIOUS PAGE
  // ============================

  const previousPage = () => {

    if (currentPage > 1) {

      setCurrentPage(currentPage - 1);

    }

  };


  // ============================
  // JSX
  // ============================

  return (

    <div
      style={{
        padding: '20px',
        maxWidth: '900px',
        margin: 'auto'
      }}
    >

      <h2>
        Bank Accounts
      </h2>


      {/* ==========================
          FORM
          ========================== */}

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Account Holder Name"
          value={ename}
          onChange={(e) =>
            setEname(e.target.value)
          }
          required
        />


   <input
          type="text"
          placeholder="Job"
          value={job}
          onChange={(e) =>
            setJob(e.target.value)
          }
          required
        />


        <input
          type="number"
          placeholder="Balance"
          value={salary}
          onChange={(e) =>
            setSalary(e.target.value)
          }
          required
        />


        <button type="submit">

          {editId ? 'Update' : 'Add'} Account

        </button>


        {/* Cancel editing */}

        {editId && (

          <button
            type="button"
            onClick={resetForm}
          >
            Cancel
          </button>

        )}

      </form>


      {/* ==========================
          TABLE
          ========================== */}

      <table
        border="1"
        cellPadding="10"
        style={{
          marginTop: '20px',
          width: '100%',
          textAlign: 'center',
          borderCollapse: 'collapse'
        }}
      >

        <thead>

          <tr>

            <th>ID</th>

            <th>Name</th>

            <th>Job</th>

            <th>Salary</th>

            <th>Actions</th>

          </tr>

        </thead>


        <tbody>

          {currentAccounts.length > 0 ? (

            currentAccounts.map((account) => (

              <tr key={account.id}>

                <td>
                  {account.id}
                </td>

                <td>
                  {account.ename}
                </td>

   <td>
                  {account.job}
                </td>

                <td>
                  {account.salary}
                </td>

                <td>

                  <button
                    onClick={() =>
                      handleEdit(account)
                    }
                  >
                    Edit
                  </button>


                  <button
                    onClick={() =>
                      handleDelete(account.id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td colSpan="4">
                No accounts found
              </td>

            </tr>

          )}

        </tbody>

      </table>


      {/* ==========================
          PAGINATION
          ========================== */}

      <div
        style={{
          marginTop: '20px',
          textAlign: 'center'
        }}
      >

        <button
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>


        <span
          style={{
            margin: '0 20px',
            fontWeight: 'bold'
          }}
        >

          Page {currentPage} of {totalPages}

        </span>


        <button
          onClick={nextPage}
          disabled={
            currentPage === totalPages ||
            totalPages === 0
          }
        >
          Next
        </button>

      </div>


      {/* ==========================
          TOTAL ACCOUNTS
          ========================== */}

      <p
        style={{
          textAlign: 'center',
          marginTop: '10px'
        }}
      >

        Total Accounts: {employees.length}

      </p>

    </div>

  );

}


export default AppCRUD;

