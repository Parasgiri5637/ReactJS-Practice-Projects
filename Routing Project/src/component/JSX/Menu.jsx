import Nav from "./Nav";
import styles from "../SCSS/Menu.module.scss";
import { AddCart } from "../../App";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const gallary = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Ftb3NhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",

    price: 100,
    title: "samosa",
    quantity: 1,
    originalPrice: 100,
  },
  {
    id: 2,
    url: "https://media.istockphoto.com/id/857468992/photo/stock-photo-of-jalebi-or-jilbi-or-imarati-indian-sweet-food-fried-in-pure-ghee-selective-focus.webp?b=1&s=170667a&w=0&k=20&c=pfbwVS_6492DhPdiSyyaHdhW0CAmi0UHnomDEgmXZWI=",

    price: 80,
    title: "jalebi",
    quantity: 1,
    originalPrice: 80,
  },
  {
    id: 3,
    url: "https://media.istockphoto.com/id/1379214757/photo/fafda-with-sweet-jalebi.webp?b=1&s=170667a&w=0&k=20&c=arDNkqv2rJB3sRbuxOUMnmTzAYX_sBhYh9xTOXA3_eA=",

    price: 50,
    title: "fafda",
    quantity: 1,
    originalPrice: 50,
  },
  {
    id: 4,
    url: "https://media.istockphoto.com/id/1461329211/photo/indian-spicy-street-food-dal-vada.webp?b=1&s=170667a&w=0&k=20&c=NPfF5_E2NeBOn23uyoJjU1096-lY0reQNBCSKNiMcPM=",
    price: 70,
    title: "bhajiya",
    quantity: 1,
    originalPrice: 70,
  },
  {
    id: 5,
    url: "https://media.istockphoto.com/id/1226693853/photo/indian-spicy-street-snake-food-item-dabeli-served-in-a-plate.webp?b=1&s=170667a&w=0&k=20&c=RjTNkPSMCd-rlb75NmVWw1aL5BYgQ_ZxSecja9Wk52I=",
    price: 85,
    title: "dabeli",
    quantity: 1,
    originalPrice: 85,
  },
  {
    id: 6,
    url: "https://media.istockphoto.com/id/1418243317/photo/bhel-or-bhelpuri-chat-item.webp?b=1&s=170667a&w=0&k=20&c=q_O8HNpZxMAOmRYVCkw-ORn7-BNDsTSDoVVsMtGT4yw=",
    price: 40,
    title: "bhel",
    quantity: 1,
    originalPrice: 40,
  },
  {
    id: 7,
    url: "https://vui.unsplash.com/resize?height=256&quality=60&type=auto&url=https%3A%2F%2Fsearched-images.s3.us-west-2.amazonaws.com%2Fac1dda06-8525-4196-8534-97f90f3c044a%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3DAKIAQ4GRIA4Q6KECABEK%252F20230829%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20230829T054447Z%26X-Amz-Expires%3D86400%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Signature%3D9d5b1c8da6d7d996bdf582314917b0f1e6886913e43b9e7aab7e8d7bca1fa303&sign=57WgZo-BtuRUGIA1_cP8gnXk2ZEE7luyHIaFAJhXDB8",
    price: 100,
    title: "ragdo",
    quantity: 1,
    originalPrice: 100,
  },
  {
    id: 8,
    url: "data:image/jpeg;base64,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",
    price: 90,
    title: "Dabeli Bhel",
    quantity: 1,
    originalPrice: 90,
  },
  {
    id: 9,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-ykVsfIgpcb03mSxb2-W1hc2zMc1lV2oQg",
    price: 60,
    title: "Bhaji corn",
    quantity: 1,
    originalPrice: 60,
  },
  {
    id: 10,
    url: "https://media.istockphoto.com/id/1307786541/photo/khaman-dhokla.webp?b=1&s=170667a&w=0&k=20&c=DfuJiBGgtJnNY7Rf8tbGZjOeAij21CE0M51Gb3ESPhs=",
    price: 70,
    title: "khaman",
    quantity: 1,
    originalPrice: 70,
  },
];

export default function Menu() {
  const dispatch = useContext(AddCart);

  function handleAddToCart(title, price, id, url, quantity, originalPrice) {
    toast.success(`${title.toUpperCase()} Added to Cart`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    const newCart = {
      id,
      title,
      price,
      url,
      quantity,
      originalPrice,
    };

    dispatch({ type: "addToCart", payload: newCart });
  }

  return (
    <>
      <Nav />
      <h1>Our Menu</h1>
      <div className={styles.container}>
        {gallary.map((food) => (
          <MenuCard
            key={food.id}
            url={food.url}
            price={food.price}
            title={food.title}
            id={food.id}
            quantity={food.quantity}
            originalPrice={food.originalPrice}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
}

function MenuCard({
  url,
  price,
  title,
  id,
  quantity,
  originalPrice,
  onAddToCart,
}) {
  return (
    <div className={styles.menuCard}>
      <div className={styles.foodImage}>
        <img src={url} alt={title} />
      </div>
      <div className={styles.foodDetail}>
        <p>Name: {title.toUpperCase()}</p>
        <p>Price: {price}</p>
      </div>

      <button
        onClick={() =>
          onAddToCart(title, price, id, url, quantity, originalPrice)
        }
      >
        Add To cart
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
