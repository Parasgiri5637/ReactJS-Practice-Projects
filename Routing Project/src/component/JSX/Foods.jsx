import styles from "../SCSS/Foods.module.scss";

const foodArr = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Ftb3NhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    price: 100,
    title: "samosa",
  },
  {
    id: 2,
    url: "https://media.istockphoto.com/id/857468992/photo/stock-photo-of-jalebi-or-jilbi-or-imarati-indian-sweet-food-fried-in-pure-ghee-selective-focus.webp?b=1&s=170667a&w=0&k=20&c=pfbwVS_6492DhPdiSyyaHdhW0CAmi0UHnomDEgmXZWI=",
    price: 80,
    title: "jalebi",
  },
  {
    id: 3,
    url: "https://media.istockphoto.com/id/1379214757/photo/fafda-with-sweet-jalebi.webp?b=1&s=170667a&w=0&k=20&c=arDNkqv2rJB3sRbuxOUMnmTzAYX_sBhYh9xTOXA3_eA=",
    price: 50,
    title: "fafda",
  },
];

export default function Foods() {
  return (
    <>
      {foodArr.map((item) => (
        <FoodCat key={item.id} item={item} />
      ))}
    </>
  );
}

function FoodCat({ item }) {
  return (
    <div className={styles.gridFood}>
      <img src={item.url} alt={item.title} />
      <h3>€{item.price}</h3>
      <p className={styles.titleFoods}>{item.title}</p>
      <p className={styles.descFoods}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        impedit incidunt corrupti velit, rerum distinctio enim quisquam. Minus,
        officia blanditiis?
      </p>
    </div>
  );
}
