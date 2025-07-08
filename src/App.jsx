import { useEffect, useState } from "react";
import "./App.css";
import { EmployeeData } from "./EmployeeData";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(EmployeeData);
  }, []);

  const handleEdit = (id) => {
    alert(id);
  };

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure to delete this item?")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

   const handleSave = () => {
  };

   const handleClear = () => {
  };

  return (
    <>
      <section className="row mx-0 py-5 d-flex justify-content-center align-items-center">
        <div className="col-md-10">
          <div className="row mx-0 d-flex flex-column gap-4 justify-content-center align-items-center">
            <div className="col-md-6 p-4 rounded shadow bg-white">
                <form>
                  <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter First Name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter last Name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <label htmlFor="age">Age:</label>
                    <input
                      type="text"
                      id="age"
                      placeholder="Enter age"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary mt-3"
                      onClick={() => handleSave()}
                    >
                      Save
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-danger mt-3"
                      onClick={() => handleClear()}
                    >
                      Clear
                    </button>
                  </div>
                </form>
            </div>
            <div className="col-md-6 p-4 rounded shadow bg-white">
              <table className="table table-hover table-bordered text-center align-middle">
                <thead className="table-primary">
                  <tr>
                    <th>Sr No.</th>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.age}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleEdit(item.id)}
                          >
                            Edit
                          </button>
                          &nbsp;
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
