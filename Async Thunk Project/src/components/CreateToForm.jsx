import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailsSlice";
import { useNavigate } from "react-router-dom";

export default function CreateToForm() {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleGetUserData(e) {
    setUsers({ ...users, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(createUser());
    dispatch(createUser(users));
    navigate("/read");
  }

  return (
    <>
      <h2 className="text-center">Fill The Data</h2>
      <form
        className="w-50 bg-light shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={users.name}
            onChange={handleGetUserData}
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
            value={users.email}
            onChange={handleGetUserData}
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
            value={users.age}
            onChange={handleGetUserData}
          />
        </div>
        {/* Radio Buttons ===============================================  */}
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            checked={users.gender === "male"} // Use checked to indicate the selected option.
            onChange={handleGetUserData}
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
            checked={users.gender === "female"} // Use checked to indicate the selected option.
            onChange={handleGetUserData}
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
