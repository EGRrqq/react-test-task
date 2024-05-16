import styles from "./ImageList.module.css";

import { useEffect, useId, useRef } from "react";
import {
  getSelectedStyles,
  getTargets,
  handleSelectedStyles,
} from "./selectedStyles";
import { createImageAlt } from "../../helpers/index";

const defaultSelectedStyles = getSelectedStyles(
  "",
  styles["item-wrapper--selected"]
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

  const wrapperSelectedStyles = () =>
    onImageSelect ? `${styles["item-wrapper--selectable"]}` : "";

  return (
    <div id={id} className={styles["list"]}>
      {images &&
        images.map((image) => (
          <label
            key={image}
            className={`${styles["item-wrapper"]} ${wrapperSelectedStyles()}`}
          >
            <input
              type="radio"
              name={name}
              value={image}
              className={styles["item-wrapper__radio"]}
              onChange={
                onImageSelect ? () => onImageSelect(image) : () => undefined
              }
              checked={selectedImage === image}
            />
            <img
              className={`${selectedStyles.notSelectedClass} ${styles["item-wrapper__img"]}`}
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
