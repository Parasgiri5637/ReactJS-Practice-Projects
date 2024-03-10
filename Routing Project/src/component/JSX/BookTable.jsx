import Nav from "./Nav";
import styles from "../SCSS/BookTable.module.scss";

export default function BookTable() {
  return (
    <>
      <Nav />
      <div className={styles.bookTable}>
        <div className={styles.overbookTable}>
          <h1 className={styles.tableText}>BOOK A TABLE</h1>
          <div className={styles.tableInput}>
            <input type="email" placeholder="EMAIL" />
            <input type="number" placeholder="NUMBER OF PEOPLE" />
            <input type="time" />
            <input type="date" />
          </div>
          <button>FIND TABLE</button>
        </div>
      </div>
    </>
  );
}
