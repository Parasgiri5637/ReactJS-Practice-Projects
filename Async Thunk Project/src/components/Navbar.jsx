import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { searchUser } from "../features/userDetailsSlice";

export default function Navbar() {
  const [searchData, setSearchData] = useState("");
  const { users } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const totalUser = users.length;

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData, dispatch]);

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
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
                All Post <span>{totalUser}</span>
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
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
