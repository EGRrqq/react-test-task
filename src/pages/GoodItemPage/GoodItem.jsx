import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";

import GoodCardImage from "../../components/GoodCard/GoodCardImage";
import { useParams } from "wouter";

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
      {product &&
        product.colors.map((c) => (
          <GoodCardImage
            key={c.id}
            src={c.images[0]}
            alt={`${product.name}, цвет ${c.name}`}
          />
        ))}
    </article>
  );
}

export default GoodItem;
