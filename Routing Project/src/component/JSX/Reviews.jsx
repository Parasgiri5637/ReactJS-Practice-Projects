import Nav from "./Nav";
import styles from "../SCSS/Reviews.module.scss";

const reviewsArr = [
  {
    name: "John Doe",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis eligendi, quaerat accusamus ipsum sequi dignissimos consequuntur blanditiis natus. Aperiam!",
  },
  {
    name: "Steve Thomas",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis eligendi, quaerat accusamus ipsum sequi dignissimos consequuntur blanditiis natus. Aperiam!",
  },
  {
    name: "Miranda Joy",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis eligendi, quaerat accusamus ipsum sequi dignissimos consequuntur blanditiis natus. Aperiam!",
  },
  {
    name: "Miranda Joy",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis eligendi, quaerat accusamus ipsum sequi dignissimos consequuntur blanditiis natus. Aperiam!",
  },
  {
    name: "Miranda Joy",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis eligendi, quaerat accusamus ipsum sequi dignissimos consequuntur blanditiis natus. Aperiam!",
  },
  {
    name: "Miranda Joy",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis eligendi, quaerat accusamus ipsum sequi dignissimos consequuntur blanditiis natus. Aperiam!",
  },
  {
    name: "Miranda Joy",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis eligendi, quaerat accusamus ipsum sequi dignissimos consequuntur blanditiis natus. Aperiam!",
  },
];

export default function Reviews() {
  return (
    <div>
      <Nav />
      <div className={styles.reviews}>
        <h1>Reviews</h1>
        <div className={styles.reviewsContainer}>
          {reviewsArr.map((item, i) => {
            return (
              <div className={styles.reviewsCard} key={i}>
                <h2>{item.name}</h2>
                <p>{item.reviews}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
