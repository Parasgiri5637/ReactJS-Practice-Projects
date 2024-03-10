import styles from "../SCSS/Foods.module.scss";

const foodArr = [
  {
    id: 1,
    url: "https://plus.unsplash.com/premium_photo-1661540754348-50ae254e4a3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxlbW9uJTIwanVpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    price: 30,
    title: "lemon juice",
  },
  {
    id: 2,
    url: "https://media.istockphoto.com/id/1372463180/photo/strawbery-juice-in-a-glass-with-two-straberry-fruits-on-red-background.webp?b=1&s=170667a&w=0&k=20&c=RqaPxPdw3rLU60DpSWwWq5EFeuXz1lOyW6cqJCDKdYs=",
    price: 80,
    title: "straberry juice",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    price: 60,
    title: "orange juice",
  },
];

export default function Juices() {
  return (
    <>
      {foodArr.map((item) => (
        <JuicesCat key={item.id} item={item} />
      ))}
    </>
  );
}

function JuicesCat({ item }) {
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
