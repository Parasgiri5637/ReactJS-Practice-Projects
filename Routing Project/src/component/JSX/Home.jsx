import Nav from "./Nav";
import styles from "../SCSS/Home.module.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <h1>Food Hut</h1>
        <h3>Always fresh & Delighful</h3>
        <Link to="/menu">
          <button>View Our Menu</button>
        </Link>
      </div>
    </>
  );
}
