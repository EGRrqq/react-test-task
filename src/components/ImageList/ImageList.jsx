import styles from "./ImageList.module.css";

import { useEffect, useId, useRef } from "react";
import {
  getSelectedStyles,
  getTargets,
  handleSelectedStyles,
} from "./selectedStyles";
import { createImageAlt } from "../../helpers/index";

const defaultSelectedStyles = getSelectedStyles(
  styles["item-wrapper__item--not-selected"],
  styles["item-wrapper__item--selected"]
);

const ImageList = ({
  images,
  name,
  selectedImage,
  selectedStyles = defaultSelectedStyles,
  onMouseOver,
}) => {
  const prevImageRef = useRef();
  const id = useId();

  useEffect(() => {
    const target = document
      .getElementById(id)
      .querySelector(`img[src="${selectedImage}"]`);

    if (target)
      handleSelectedStyles(getTargets(prevImageRef, target), selectedStyles);
  }, [selectedImage, selectedStyles, id]);

  return (
    <div id={id} className={styles["searchable"]}>
      {images &&
        images.map((image) => (
          <figure key={image} className={styles["item-wrapper"]}>
            <img
              className={`${selectedStyles.notSelectedClass} ${styles["item-wrapper__item"]}`}
              src={image}
              alt={createImageAlt(image, name)}
              onMouseOver={() => onMouseOver(image)}
            />
          </figure>
        ))}
    </div>
  );
};

export default ImageList;
