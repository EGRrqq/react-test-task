import styles from "./ImageSlider.module.css";
import { useEffect, useRef, useState } from "react";
import ImageList from "../ImageList/ImageList";
import { createImageAlt } from "../../helpers";
import useHorizontalScroll from "../../hooks/useHorizontalScroll";

const ImageSlider = ({ images, name }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const asideRef = useRef();

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  useHorizontalScroll(asideRef, "(max-width: 1024px)");

  function handleNextClick() {
    const index = images.indexOf(selectedImage);
    const nextImageIndex = images[(index + 1) % images.length];

    setSelectedImage(nextImageIndex);
  }
  function handlePrevClick() {
    const index = images.indexOf(selectedImage);
    const prevImageIndex = images[(index - 1 + images.length) % images.length];

    setSelectedImage(prevImageIndex);
  }

  return (
    <section className={styles["image-slider"]}>
      <aside className={styles["image-slider__aside"]} ref={asideRef}>
        <ImageList
          images={images}
          name={name}
          onMouseOver={setSelectedImage}
          selectedImage={selectedImage}
        />
      </aside>

      <div className={styles["image-slider__main"]}>
        <figure>
          <img
            src={selectedImage}
            alt={createImageAlt(selectedImage, name)}
            className={styles["image-slider__main-img"]}
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
