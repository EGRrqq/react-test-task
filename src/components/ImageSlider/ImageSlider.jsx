import styles from "./ImageSlider.module.css";
import { useEffect, useRef, useState } from "react";

const ImageSlider = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const prevImageRef = useRef();
  const asideRef = useRef();

  // horizontal scroll for aside element
  // when it wraps (max-width: 639px)
  useEffect(() => {
    const handleScroll = (e) => {
      if (!e.ctrlKey) {
        e.preventDefault();
        asideRef.current.scrollLeft += e.deltaY;
      }
    };

    // const asideElement = asideRef.current;
    // if (asideElement) {
    //   asideElement.addEventListener("wheel", handleScroll);

    //   return () => {
    //     asideElement.removeEventListener("wheel", handleScroll);
    //   };
    // }
    const mql = window.matchMedia("(max-width: 639px)");
    const checkMatchMedia = (mql) => {
      const asideElement = asideRef.current;
      if (mql.matches) {
        asideElement.addEventListener("wheel", handleScroll);
      } else {
        asideElement.removeEventListener("wheel", handleScroll);
      }
    };

    mql.addEventListener("change", checkMatchMedia);
    checkMatchMedia(mql);

    return () => {
      mql.removeEventListener("change", checkMatchMedia);
    };
  }, []);

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
    const nextImage = images[(index + 1) % images.length];

    setSelectedImage(nextImage);
    handleSelectedStyles(document.querySelector(`img[src="${nextImage}"]`));
  }
  function handlePrevClick() {
    const index = images.indexOf(selectedImage);
    const prevImage = images[(index - 1 + images.length) % images.length];

    setSelectedImage(prevImage);
    handleSelectedStyles(document.querySelector(`img[src="${prevImage}"]`));
  }

  return (
    <section className={styles["image-slider"]}>
      <aside className={styles["image-slider__aside"]} ref={asideRef}>
        {images.map((image, index) => (
          <figure key={index}>
            <img
              className={
                (styles["image-slider__aside-img--not-selected"],
                styles["image-slider__aside-img"])
              }
              src={image}
              alt=""
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
