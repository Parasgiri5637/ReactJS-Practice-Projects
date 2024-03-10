import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { searchData } from "../crudReducer/CrudReducer";

export default function Navbar() {
  const [searchUser, setSearchUser] = useState("");
  const { users } = useSelector((state) => state.app);
  const userLength = users.length;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchData(searchUser));
  }, [searchUser, dispatch]);

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Info.UI
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/read" className="nav-link">
                All Post <span>{userLength}</span>
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
            />
            {/* Here is the corrected input element with a closing angle bracket */}
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
