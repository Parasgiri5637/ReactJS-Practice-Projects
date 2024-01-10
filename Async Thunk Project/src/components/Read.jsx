import { showUser, deleteUser } from "../features/userDetailsSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CustomeModel from "./CustomeModel";

export default function Read() {
  const [id, setId] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);

  const dispatch = useDispatch();
  const { users, loading, error, searchUser } = useSelector(
    (state) => state.app
  );

  useEffect(() => {
    dispatch(showUser());

    return () => {};
  }, [dispatch]);

  return (
    <>
      {loading && <h1 className="text-center">Loading...</h1>}
      {error && <h1 className="text-center">Error...</h1>}
      {!loading && !error && (
        <>
          {showPopUp && (
            <CustomeModel
              id={id}
              showPopUp={showPopUp}
              setShowPopUp={setShowPopUp}
            />
          )}
          <h2 className="text-center">All Data</h2>
          <div className="userCard">
            {users &&
              users
                .filter((user) => {
                  if (searchUser.length === 0) return user;
                  return user.name.toLowerCase().includes(searchUser);
                })

                .map((user) => (
                  <UserList
                    key={user.id}
                    user={user}
                    setId={setId}
                    setShowPopUp={setShowPopUp}
                  />
                ))}
          </div>
        </>
      )}
    </>
  );
}

function UserList({ user, setId, setShowPopUp }) {
  const dispatch = useDispatch();

  return (
    <div className="userList">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name:{user.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Email:{user.email}
          </h6>
          <p className="card-text">Gender:{user.gender}</p>
          <a
            className="card-link"
            onClick={() => [setId(user.id), setShowPopUp(true)]}
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
