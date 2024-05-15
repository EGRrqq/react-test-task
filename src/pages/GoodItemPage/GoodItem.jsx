import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";

import { useParams } from "wouter";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import GoodDetailedCard from "../../components/GoodDetailedCard/GoodDetailedCard";

function GoodItem() {
  const params = useParams();
  const [itemId, colorId] = params.id.split("-");

  const [product, setProduct] = useState(undefined);
  const [selectedColor, setSelectedColor] = useState(colorId - 1 || 0);

  useEffect(() => {
    getProduct(itemId).then((data) => {
      setProduct(data);
    });
  }, [itemId]);

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
