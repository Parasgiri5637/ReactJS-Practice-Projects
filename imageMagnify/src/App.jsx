import Resizer from "react-image-file-resizer";
import ReactImageMagnify from "react-image-magnify";

import { useState, useEffect } from "react";

const resizeFile = (file, width, height) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      width,
      height,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

const resizeImage = async (img, width, height) => {
  try {
    // Get the file from input or other sources
    const file = await fetch(img);
    const blob = await file.blob();

    // Resize the image
    const resizedPhoto = await resizeFile(blob, width, height);
    return resizedPhoto;
  } catch (error) {
    console.error("Error resizing image:", error);
  }
};

function App() {
  const [imgMain, setImgMain] = useState();
  const [imgLarge, setImgLarge] = useState();

  const smallImg = "public/small.jpg";
  const bigImg = "public/larger.jpg";

  useEffect(() => {
    resizeImage(smallImg, 600, 700).then((data) => setImgMain(data));
    resizeImage(bigImg, 1200, 1800).then((data) => setImgLarge(data));
  }, []);

  console.log(imgMain);

  return (
    <>
      {/* <img src={imgMain} /> */}
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Main Image",
            isFluidWidth: true,
            src: imgMain,
          },
          largeImage: {
            src: imgLarge,
            width: 1200,
            height: 1800,
          },
        }}
      />
    </>
  );
}

export default App;
