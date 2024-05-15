import { useEffect, useState } from "react";
import { getProduct, getSizes } from "../../services/api";

import { useLocation, useParams } from "wouter";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import GoodDetailedCard from "../../components/GoodDetailedCard/GoodDetailedCard";

import ImageList from "../../components/ImageList/ImageList";

function GoodItem() {
  const params = useParams();
  const [itemId, colorId] = params.id.split("-");

  const [product, setProduct] = useState(undefined);
  const [selectedImage, setSelectedImage] = useState(undefined);
  const [location, setLocation] = useLocation();

  function handleColorSelect(image) {
    const selId =
      product && product.colors.find((c) => c.images[0] === image).id;

    setLocation(`/${itemId}-${selId}`);
  }

  useEffect(() => {
    getProduct(itemId).then((data) => {
      setProduct(data);
      setSelectedImage(data.colors[colorId - 1].images[0]);
    });
  }, [itemId, colorId]);

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
          select={
            <ImageList
              name={product.name}
              images={product.colors.map((c) => c.images[0])}
              selectedImage={selectedImage}
              // onMouseOver={setSelectedImage}
              onImageSelect={handleColorSelect}
            />
          }
        />
      )}
    </>
  );
}

export default GoodItem;
