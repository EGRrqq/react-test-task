import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";

import { useParams } from "wouter";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import GoodDetailedCard from "../../components/GoodDetailedCard/GoodDetailedCard";

function GoodItem() {
  const [product, setProduct] = useState(undefined);
  const params = useParams();

  useEffect(() => {
    getProduct(params.id).then((data) => {
      setProduct(data);
    });
  }, [params]);

  return (
    <>
      <GoodDetailedCard
        slider={product && <ImageSlider images={product.colors[0].images} />}
      />
    </>
  );
}

export default GoodItem;
