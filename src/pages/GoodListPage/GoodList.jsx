import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import GoodCard from "../../components/GoodCard/GoodCard";
import GoodCardImage from "../../components/GoodCard/GoodCardImage";
import "./style.css";

function GoodList() {
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <article className="good-list">
      {products &&
        products.map((p) =>
          p.colors.map((c) => (
            <GoodCard
              key={`${p.id}_${c.id}`}
              data-itemId={p.id}
              image={
                <GoodCardImage
                  src={c.images[0]}
                  alt={`${p.name}, цвет ${c.name}`}
                />
              }
              info={<p>{`${p.name}`}</p>}
            />
          ))
        )}
    </article>
  );
}

export default GoodList;
