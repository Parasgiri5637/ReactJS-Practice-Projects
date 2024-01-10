import ImageSlider from "./ImageSlider";
import "./App.css";

import img1 from "../public/img1.jpg";
import img2 from "../public/img2.jpg";
import img3 from "../public/img3.jpg";
import img4 from "../public/img4.jpg";
import img5 from "../public/img5.jpg";

const IMAGES = [
  { url: img1, alt: "img1" },
  { url: img2, alt: "img2" },
  { url: img3, alt: "img3" },
  { url: img4, alt: "img4" },
  { url: img5, alt: "img5" },
];

function App() {
  return (
    <>
      <ImageSlider images={IMAGES} />
    </>
  );
}

export default App;
