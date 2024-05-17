import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { useLocation, useParams } from "wouter";

import ImageSlider from "../../components/ImageSlider/ImageSlider";
import GoodDetailedCard from "../../components/GoodDetailedCard/GoodDetailedCard";
import GoodItemForm from "./GoodItemForm";

function GoodItem() {
  const params = useParams();
  const [itemId, colorId] = params.id.split("-");
  const [location, setLocation] = useLocation();

  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    getProduct(itemId)
      .then((data) => {
        if (!data.colors[colorId - 1]) setLocation(`/`);

        setProduct(data);
      })
      .catch((e) => {
        setLocation(`/`);
      });
  }, [itemId, setLocation, colorId]);

  return (
    <>
      {product && (
        <GoodDetailedCard
          info={
            <header>
              <h1>{product.name}</h1>
              <p>{product.colors[colorId - 1].description}</p>
            </header>
          }
          price={
            <p>
              <strong>{product.colors[colorId - 1].price}</strong>
            </p>
          }
          slider={
            <ImageSlider
              images={product.colors[colorId - 1].images}
              name={product.name}
            />
          }
          form={
            <GoodItemForm product={product} itemId={itemId} colorId={colorId} />
          }
        />
      )}
    </>
  );
}

export default GoodItem;
