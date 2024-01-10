import { useSelector } from "react-redux";

export default function CustomeModel({ id, showPopUp, setShowPopUp }) {
  const { users } = useSelector((state) => state.app);

  const singleUser = users.find((user) => user.id === id);
  const { name, email, age, gender } = singleUser;
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h2>Name:{name}</h2>
        <h3>Email:{email}</h3>
        <h4>Age:{age}</h4>
        <button onClick={() => setShowPopUp(false)}>Close</button>
      </div>
    </div>
  );
}
