import styles from "./GoodItem.module.css";

import { useEffect, useState } from "react";
import { getProduct, getSizes } from "../../services/api";
import { useLocation, useParams } from "wouter";

import ImageSlider from "../../components/ImageSlider/ImageSlider";
import GoodDetailedCard from "../../components/GoodDetailedCard/GoodDetailedCard";
import ImageList from "../../components/ImageList/ImageList";
import { getSelectedStyles } from "../../components/ImageList/selectedStyles";
import GoodForm from "../../components/GoodDetailedCard/GoodForm";

const colorSelectedStyles = getSelectedStyles(
  styles["color--not-selected"],
  styles["color--selected"]
);

function GoodItem() {
  const params = useParams();
  const [itemId, colorId] = params.id.split("-");
  const [location, setLocation] = useLocation();

  const [product, setProduct] = useState(undefined);
  const [selectedImage, setSelectedImage] = useState(undefined);
  const [sizes, setSizes] = useState([]);

  function handleColorSelect(image) {
    const selId =
      product && product.colors.find((c) => c.images[0] === image).id;

    setLocation(`/${itemId}-${selId}`);
  }

  useEffect(() => {
    getSizes().then((data) => {
      setSizes(data);
    });
  }, []);

  useEffect(() => {
    getProduct(itemId)
      .then((data) => {
        setProduct(data);
        setSelectedImage(data.colors[colorId - 1].images[0]);
      })
      .catch((e) => {
        setLocation(`/`);
      });
  }, [itemId, colorId, setLocation]);

  return (
    <>
      {product && (
        <GoodDetailedCard
          slider={
            <ImageSlider
              images={product.colors[colorId - 1].images}
              name={product.name}
            />
          }
          form={
            <GoodForm
              select={
                <ImageList
                  name={product.name}
                  images={product.colors.map((c) => c.images[0])}
                  selectedImage={selectedImage}
                  onImageSelect={handleColorSelect}
                  selectedStyles={colorSelectedStyles}
                />
              }
              sizes={sizes.map((size) => {
                const isDisabled =
                  product &&
                  !product.colors[colorId - 1].sizes.includes(size.id);

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
          }
        />
      )}
    </>
  );
}

export default GoodItem;
