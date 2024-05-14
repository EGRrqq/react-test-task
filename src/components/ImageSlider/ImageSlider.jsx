import styles from "./ImageSlider.module.css";
import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const prevImageRef = React.useRef();

  function handleMouseOver(target, image) {
    handleSelectedStyles(target);
    setSelectedImage(image);
  }

  function handleSelectedStyles(target) {
    if (prevImageRef.current) {
      prevImageRef.current.classList.add(
        styles["image-slider__aside-img--not-selected"]
      );
      prevImageRef.current.classList.remove(
        styles["image-slider__aside-img--selected"]
      );
    }

    target.classList.remove(styles["image-slider__aside-img--not-selected"]);
    target.classList.add(styles["image-slider__aside-img--selected"]);
    prevImageRef.current = target;
  }

  function handleNextClick() {
    const index = images.indexOf(selectedImage);
    setSelectedImage(images[(index + 1) % images.length]);
  }
  function handlePrevClick() {
    const index = images.indexOf(selectedImage);
    setSelectedImage(images[(index - 1 + images.length) % images.length]);
  }

  return (
    <section className={styles["image-slider"]}>
      <aside className={styles["image-slider__aside"]}>
        {images.map((image, index) => (
          <figure key={index}>
            <img
              className={styles["image-slider__aside-img--not-selected"]}
              src={image}
              alt=""
              style={{ width: "50px", height: "50px" }}
              onMouseOver={(e) => handleMouseOver(e.target, image)}
            />
          </figure>
        ))}
      </aside>

      <div className={styles["image-slider__main"]}>
        <figure>
          <img
            src={selectedImage}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
        </figure>

        <section className={styles["image-slider__main-btns"]}>
          <button onClick={handlePrevClick}>Prev</button>
          <button onClick={handleNextClick}>Next</button>
        </section>
      </div>
    </section>
  );
};

export default ImageSlider;
