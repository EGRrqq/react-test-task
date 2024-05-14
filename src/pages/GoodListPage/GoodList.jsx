import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import GoodCard from "../../components/GoodCard";

function GoodList() {
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <article>
      {products &&
        products.map((p) =>
          p.colors.map((c) => (
            <GoodCard
              key={`${p.id}_${c.id}`}
              data-itemId={p.id}
              image={<img src={c.images[0]} alt={`${p.name} ${c.name}`} />}
              info={<p>{`${p.name} ${c.name}`}</p>}
            />
          ))
        )}
    </article>
  );
}

export default GoodList;
