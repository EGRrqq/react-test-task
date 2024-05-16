import styles from "./GoodItem.module.css";

import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import ImageList from "../../components/ImageList/ImageList";
import { itemWithColorPath } from "../../helpers";
import { getSelectedStyles } from "../../components/ImageList/selectedStyles";

const colorSelectedStyles = getSelectedStyles(
  styles["color--not-selected"],
  styles["color--selected"]
);

function GoodItemColors({ product, register, itemId, colorId }) {
  const [, setLocation] = useLocation();
  const [selectedImage, setSelectedImage] = useState(
    product ? product.colors[colorId - 1].images[0] : undefined
  );

  function handleColorSelect(image) {
    const newColorId =
      product && product.colors.find((c) => c.images[0] === image).id;

    setLocation(itemWithColorPath(itemId, newColorId));
  }

  useEffect(() => {
    product && setSelectedImage(product.colors[colorId - 1].images[0]);
  }, [product, colorId]);

  return (
    <ImageList
      name={"color-id"}
      images={product.colors.map((c) => c.images[0])}
      selectedImage={selectedImage}
      onImageSelect={handleColorSelect}
      selectedStyles={colorSelectedStyles}
      register={register}
      value={colorId}
      required={true}
    />
  );
}

export default GoodItemColors;
