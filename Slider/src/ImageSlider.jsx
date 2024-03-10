import { useCallback, useEffect, useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

export default function ImageSlider({ images }) {
  const [imageNext, setImageNext] = useState(0);

  const showPrevImage = useCallback(() => {
    setImageNext((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }, [images]);

  const showNextImage = useCallback(() => {
    setImageNext((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }, [images]);

  useEffect(() => {
    const interval = setInterval(showNextImage, 5000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowRight") showNextImage();
      if (e.key === "ArrowLeft") showPrevImage();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showNextImage, showPrevImage]);

  return (
    <div className="slider">
      <div className="imagesSlider">
        {images.map((img, index) => (
          <img
            src={img?.url}
            key={index}
            alt={img?.alt}
            style={{ transform: `translateX(${-100 * imageNext}%)` }}
          />
        ))}
      </div>
      <button className="left" onClick={showPrevImage}>
        <ArrowBigLeft />
      </button>
      <button className="right" onClick={showNextImage}>
        <ArrowBigRight />
      </button>

      <div className="dot">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setImageNext(index)}
            className="btn-dot"
          >
            {index === imageNext ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  );
}
