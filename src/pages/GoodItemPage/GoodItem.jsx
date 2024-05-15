import { useEffect, useState } from "react";
import { getProduct, getSizes } from "../../services/api";

import { useParams } from "wouter";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import GoodDetailedCard from "../../components/GoodDetailedCard/GoodDetailedCard";

function GoodItem() {
  const params = useParams();
  const [itemId, colorId] = params.id.split("-");

  const [product, setProduct] = useState(undefined);
  const [sizes, setSizes] = useState([]);
  const [selectedColor, setSelectedColor] = useState(colorId - 1 || 0);

  useEffect(() => {
    getSizes().then((data) => {
      setSizes(data);
    });
  }, []);

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
          sizes={sizes.map((size) => {
            const isDisabled =
              product && !product.colors[selectedColor].sizes.includes(size.id);

            return (
              <button key={size.id} disabled={isDisabled}>
                {size.label}
              </button>
            );
          })}
        />
      )}
    </>
  );
}

export default GoodItem;
