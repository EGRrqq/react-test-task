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
  onImageSelect,
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
          <label key={image} className={styles["item-wrapper"]}>
            <input
              type="radio"
              name={name}
              value={image}
              className={styles["item-wrapper__input"]}
              onChange={
                onImageSelect ? () => onImageSelect(image) : () => undefined
              }
              checked={selectedImage === image}
            />
            <img
              className={`${selectedStyles.notSelectedClass} ${styles["item-wrapper__item"]}`}
              src={image}
              alt={createImageAlt(image, name)}
              onMouseOver={onMouseOver ? () => onMouseOver(image) : undefined}
            />
          </label>
        ))}
    </div>
  );
};

export default ImageList;
