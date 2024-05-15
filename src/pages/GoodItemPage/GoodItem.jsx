import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";

import { useParams } from "wouter";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import GoodDetailedCard from "../../components/GoodDetailedCard/GoodDetailedCard";

function GoodItem() {
  const [product, setProduct] = useState(undefined);
  const [selectedColor, setSelectedColor] = useState(0);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
    });
  }, [id]);

  return (
    <>
      {product && (
        <GoodDetailedCard
          slider={<ImageSlider images={product.colors[selectedColor].images} />}
          select={
            <select
              name="colors"
              id="colors"
              onChange={(e) => setSelectedColor(e.target.value - 1)}
            >
              {product.colors.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          }
        />
      )}
    </>
  );
}

export default GoodItem;
