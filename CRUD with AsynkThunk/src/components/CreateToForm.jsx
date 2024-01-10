import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../crudReducer/CrudReducer";
import { useNavigate } from "react-router-dom";

export default function CreateToForm() {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function getUserData(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function submitCreateForm(e) {
    e.preventDefault();
    dispatch(createUser(userData));
    navigate("/read");
  }

  return (
    <>
      <h2 className="text-center">Fill The Data</h2>
      <form
        className="w-50 bg-light shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto"
        onSubmit={submitCreateForm}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={userData.name}
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email
          </label>

          <input
            type="email"
            className="form-control"
            name="email"
            value={userData.email}
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={userData.age}
            onChange={getUserData}
          />
        </div>
        {/* Radio Buttons ===============================================  */}
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            onChange={getUserData}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            onChange={getUserData}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
