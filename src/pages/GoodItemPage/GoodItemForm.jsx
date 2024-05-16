import styles from "./GoodItem.module.css";

import ImageList from "../../components/ImageList/ImageList";
import GoodForm from "../../components/GoodDetailedCard/GoodForm";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { itemWithColorPath } from "../../helpers";
import { getSelectedStyles } from "../../components/ImageList/selectedStyles";
import { getSizes } from "../../services/api";
import { useForm } from "react-hook-form";

const colorSelectedStyles = getSelectedStyles(
  styles["color--not-selected"],
  styles["color--selected"]
);

function GoodItemForm({ product, itemId, colorId }) {
  const [location, setLocation] = useLocation();

  const [selectedImage, setSelectedImage] = useState(
    product ? product.colors[colorId - 1].images[0] : undefined
  );
  const [sizes, setSizes] = useState([]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  function handleColorSelect(image) {
    const colorId =
      product && product.colors.find((c) => c.images[0] === image).id;

    setLocation(itemWithColorPath(itemId, colorId));
  }

  useEffect(() => {
    product && setSelectedImage(product.colors[colorId - 1].images[0]);
  }, [product, colorId]);

  useEffect(() => {
    getSizes().then((data) => {
      setSizes(data);
    });
  }, []);

  return (
    <GoodForm
      onSubmit={handleSubmit(onSubmit)}
      select={
        <ImageList
          name={product.name}
          images={product.colors.map((c) => c.images[0])}
          selectedImage={selectedImage}
          onImageSelect={handleColorSelect}
          selectedStyles={colorSelectedStyles}
          register={register}
        />
      }
      sizes={sizes.map((size) => {
        const isDisabled =
          product && !product.colors[colorId - 1].sizes.includes(size.id);

        return (
          <button
            key={size.id}
            disabled={isDisabled}
            onClick={(e) => e.preventDefault()}
          >
            {size.label}
          </button>
        );
      })}
    />
  );
}

export default GoodItemForm;
