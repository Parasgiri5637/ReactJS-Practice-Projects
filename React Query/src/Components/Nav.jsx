import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-3 mb-5 bg-body-tertiary rounded">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/heroes" className="nav-link" href="#">
                Heroes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rqheroes" className="nav-link">
                RQHeroes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/parallel-query" className="nav-link">
                Parallel Query
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dynamic-parallel" className="nav-link">
                Dynamic Parallel
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dependentHero" className="nav-link">
                Dependent Queries
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
