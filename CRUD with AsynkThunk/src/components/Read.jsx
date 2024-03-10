import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser, deleteUser } from "../crudReducer/CrudReducer";
import { Link } from "react-router-dom";
import CustomeModel from "./CustomeModal";

export default function Read() {
  const { users, loading, error, searchUserStore } = useSelector(
    (state) => state.app
  );
  const [showModal, setShowModal] = useState(false);
  const [modalId, setModalId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      {loading && <h1 className="text-center">Loading...</h1>}
      {error && <h1 className="text-center">{error.message}</h1>}
      {!loading && !error && (
        <>
          {showModal && <CustomeModel id={modalId} showModal={setShowModal} />}
          <h2 className="text-center">All Data</h2>
          <div className="userCard">
            {Array.isArray(users) &&
              users
                .filter((user) =>
                  user.name
                    .toLowerCase()
                    .includes(searchUserStore.toLowerCase())
                )
                .map((user) => (
                  <UserList
                    key={user.id}
                    user={user}
                    setShowModal={setShowModal}
                    modalId={setModalId}
                  />
                ))}
          </div>
        </>
      )}
    </>
  );
}

function UserList({ user, setShowModal, modalId }) {
  const dispatch = useDispatch();

  return (
    <div className="userList">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name:{user.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Email: {user.email}
          </h6>
          <p className="card-text">Gender:{user.gender}</p>
          <a
            className="card-link"
            onClick={() => [modalId(user.id), setShowModal(true)]}
          >
            View
          </a>
          <Link to={`/edit/${user.id}`} className="card-link">
            Edit
          </Link>
          <a
            className="card-link"
            onClick={() => dispatch(deleteUser(user.id))}
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}
