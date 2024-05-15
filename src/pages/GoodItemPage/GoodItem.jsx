import { useEffect, useState } from "react";
import { getProduct, getSizes } from "../../services/api";

import { useParams } from "wouter";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import GoodDetailedCard from "../../components/GoodDetailedCard/GoodDetailedCard";

import ImageList from "../../components/ImageList/ImageList";

function GoodItem() {
  const params = useParams();
  const [itemId, colorId] = params.id.split("-");

  const [product, setProduct] = useState(undefined);
  const [sizes, setSizes] = useState([]);
  const [selectedImage, setSelectedImage] = useState(undefined);

  useEffect(() => {
    getSizes().then((data) => {
      setSizes(data);
    });
  }, []);

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
              onMouseOver={setSelectedImage}
            />
          }

          // sizes={sizes.map((size) => {
          //   const isDisabled =
          //     product && !product.colors[colorId - 1].sizes.includes(size.id);

          //   return (
          //     <button key={size.id} disabled={isDisabled}>
          //       {size.label}
          //     </button>
          //   );
          // })}
        />
      )}
    </>
  );
}

export default GoodItem;
