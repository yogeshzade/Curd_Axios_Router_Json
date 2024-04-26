import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark]=useState("");

  const getData = () => {
    axios
      .get("https://662ba564de35f91de159028e.mockapi.io/curd-operation")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };
  function handleDelete(id) {
    axios
      .delete(
        `https://662ba564de35f91de159028e.mockapi.io/curd-operation/${id}`
      )
      .then(() => {
        getData();
      });
  }
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          onClick={()=>{
            if(tabledark==='table-dark') setTableDark("");
            else setTableDark('table-dark');
          }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2>Show All Records</h2>
        <Link to="/">
          <button className="btn btn-secondary">Add Record</button>
        </Link>
      </div>
      <table class={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
