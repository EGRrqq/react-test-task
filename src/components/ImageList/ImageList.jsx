import styles from "./ImageList.module.css";

import { useEffect, useId, useRef } from "react";
import {
  getSelectedStyles,
  getTargets,
  handleSelectedStyles,
} from "./selectedStyles";
import { createImageAlt } from "../../helpers/index";
import Input from "../solid/Input";

const defaultSelectedStyles = getSelectedStyles(
  "",
  styles["item-wrapper--selected"]
);

const ImageList = ({
  images,
  label,
  name,
  required,
  value,
  selectedImage,
  selectedStyles = defaultSelectedStyles,
  onMouseOver,
  onImageSelect,
  register,
}) => {
  const prevImageRef = useRef();
  const id = useId();

  const wrapperSelectedStyles = () =>
    onImageSelect ? `${styles["item-wrapper--selectable"]}` : "";

  useEffect(() => {
    const target = document
      .getElementById(id)
      .querySelector(`img[src="${selectedImage}"]`);

    if (target)
      handleSelectedStyles(getTargets(prevImageRef, target), selectedStyles);
  }, [selectedImage, selectedStyles, id]);

  return (
    <div id={id} className={styles["list"]}>
      {images &&
        images.map((image) => (
          <label
            key={image}
            className={`${selectedStyles.notSelectedClass} ${
              styles["item-wrapper"]
            } ${wrapperSelectedStyles()}`}
          >
            <Input
              type="radio"
              className={styles["item-wrapper__radio"]}
              name={name}
              required={required}
              register={register}
              value={value || selectedImage}
              onChange={
                onImageSelect ? () => onImageSelect(image) : () => undefined
              }
              checked={selectedImage === image}
            />
            <img
              className={`${styles["item-wrapper__img"]}`}
              src={image}
              alt={createImageAlt(image, label)}
              onMouseOver={onMouseOver ? () => onMouseOver(image) : undefined}
            />
          </label>
        ))}
    </div>
  );
};

export default ImageList;
