import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";

import GoodCardImage from "../../components/GoodCard/GoodCardImage";
import { useParams } from "wouter";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

function GoodItem() {
  const [product, setProduct] = useState(undefined);
  const params = useParams();

  useEffect(() => {
    getProduct(params.id).then((data) => {
      setProduct(data);
    });
  }, [params]);

  return (
    <article>
      {product && <ImageSlider images={product.colors[0].images} />}
    </article>
  );
}

export default GoodItem;
