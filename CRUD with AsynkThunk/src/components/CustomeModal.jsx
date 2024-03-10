import { useSelector } from "react-redux";
export default function CustomeModel({ id, showModal }) {
  const { users } = useSelector((state) => state.app);
  const singleUserView = users.find((user) => user.id === id);
  console.log(singleUserView);
  const { name, email, age } = singleUserView;

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h2>Name:{name}</h2>
        <h3>Email:{email}</h3>
        <h4>Age:{age}</h4>
        <button onClick={() => showModal(false)}>Close</button>
      </div>
    </div>
  );
}
