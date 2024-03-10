import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../crudReducer/CrudReducer";

export default function CreateToForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updateData, setUpdateData] = useState({});
  const { users } = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
      const editUser = users.find((user) => user.id === id);
      if (editUser) {
        setUpdateData(editUser);
      }
    }
  }, [id, users]);
  const { name, email, age, gender } = updateData;

  function getEditedData(e) {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  }

  function submitCreateForm(e) {
    e.preventDefault();
    dispatch(updateUser(updateData));
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
            value={name}
            onChange={getEditedData}
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
            value={email}
            onChange={getEditedData}
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
            value={age}
            onChange={getEditedData}
          />
        </div>
        {/* Radio Buttons ===============================================  */}
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={getEditedData}
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
            checked={gender === "female"}
            onChange={getEditedData}
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
