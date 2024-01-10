import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../features/userDetailsSlice";

export default function EditToForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.app);
  const [updateUser, setUpdateUser] = useState({});

  console.log(updateUser);

  const { name, email, age, gender } = updateUser;

  useEffect(() => {
    if (id && users) {
      const singleUserEdit = users.find((user) => user.id === id);
      if (singleUserEdit) {
        setUpdateUser(singleUserEdit);
      }
    }
  }, [id, users]);

  function handleNewData(e) {
    const { name, value } = e.target;
    setUpdateUser({ ...updateUser, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Dispatch the editUser action with the updated user data
    dispatch(
      editUser({
        id: updateUser.id, // Include the user ID in the data
        name: updateUser.name,
        email: updateUser.email,
        age: updateUser.age,
        gender: updateUser.gender,
      })
    );
    navigate("/read");
  }

  return (
    <>
      <h2 className="text-center">Edit The Data</h2>
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
            value={name}
            onChange={handleNewData}
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
            onChange={handleNewData}
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
            onChange={handleNewData}
          />
        </div>
        {/* Radio Buttons ===============================================  */}
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"} // Use checked to indicate the selected option.
            onChange={handleNewData}
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
            checked={gender === "female"} // Use checked to indicate the selected option.
            onChange={handleNewData}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </>
  );
}
