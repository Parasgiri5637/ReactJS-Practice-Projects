import { useState } from "react";
import { MdClose } from "react-icons/md";

const data = [
  {
    id: 1,
    thumbnail: "/image-product-1-thumbnail.jpg",
    mainImg: "/image-product-1.jpg",
  },
  {
    id: 2,
    thumbnail: "/image-product-2-thumbnail.jpg",
    mainImg: "/image-product-2.jpg",
  },
  {
    id: 3,
    thumbnail: "/image-product-3-thumbnail.jpg",
    mainImg: "/image-product-3.jpg",
  },
  {
    id: 4,
    thumbnail: "/image-product-4-thumbnail.jpg",
    mainImg: "/image-product-4.jpg",
  },
];

const productArr = Array.isArray(data) && data;

export default function Slider() {
  const [overlaySlider, setOverlaySlider] = useState(false);

  const [index, setIndex] = useState(0);

  const { mainImg } = data[index];

  function handlePrevBtn() {
    setIndex((value) => {
      if (value === 0) return data.length - 1;
      return value - 1;
    });
  }
  function handleNextBtn() {
    setIndex((value) => {
      if (value === data.length - 1) return 0;
      return value + 1;
    });
  }

  return (
    <>
      <div className="slider">
        <div className="mainImg">
          <img
            src={mainImg}
            alt="main Image"
            onClick={() => setOverlaySlider(true)}
          />
          <img
            src="/icon-previous.svg"
            alt="previus button"
            className="prevBtn"
            onClick={handlePrevBtn}
          />
          <img
            src="/icon-next.svg"
            alt="next button"
            className="nextBtn"
            onClick={handleNextBtn}
          />
        </div>
        <div className="thumbnail-img">
          {productArr.map((item, i) => (
            <img
              key={item.id}
              src={item?.thumbnail}
              onClick={() => setIndex(i)}
              alt="thumbnail"
              className={i === index ? "active-ThumbnailImg" : ""}
            />
          ))}
        </div>
      </div>
      {overlaySlider && (
        <OverlayImage
          setOverlaySlider={setOverlaySlider}
          mainImg={mainImg}
          handleNextBtn={handleNextBtn}
          handlePrevBtn={handlePrevBtn}
          setIndex={setIndex}
          index={index}
        />
      )}
    </>
  );
}

function OverlayImage({
  setOverlaySlider,
  mainImg,
  handleNextBtn,
  handlePrevBtn,
  setIndex,
  index,
}) {
  return (
    <div className="overlayContainer">
      <div className="overlayImg">
        <div className="close-icon">
          <MdClose
            className="closeBtn"
            onClick={() => setOverlaySlider(false)}
          />
        </div>
        <div className="mainImg2">
          <img src={mainImg} alt="main Image" className="main-img" />
          <img
            src="/icon-previous.svg"
            alt="previus button"
            className="prevBtn"
            onClick={handlePrevBtn}
          />
          <img
            src="/icon-next.svg"
            alt="next button"
            className="nextBtn"
            onClick={handleNextBtn}
          />
        </div>
        <div className="thumbnail-container">
          <div className="thumbnail-img2">
            {productArr.map((item, i) => (
              <img
                key={item.id}
                src={item?.thumbnail}
                onClick={() => setIndex(i)}
                alt="thumbnail"
                className={i === index ? "active-ThumbnailImg" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
