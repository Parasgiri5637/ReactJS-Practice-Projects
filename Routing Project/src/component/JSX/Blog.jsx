import Nav from "./Nav";
import styles from "../SCSS/Blog.module.scss";
import { NavLink, Outlet } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <Nav />
      <div className={styles.blogContainer}>
        <h1>EVENTS AT THE FOOD HUT</h1>
        <div className={styles.blogBtn}>
          <NavLink to="foods">
            <button className={styles.active}>Foods</button>
          </NavLink>
          <NavLink to="juices">
            <button className={styles.active}>Juices</button>
          </NavLink>
        </div>
        <div className={styles.foodContainner}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
