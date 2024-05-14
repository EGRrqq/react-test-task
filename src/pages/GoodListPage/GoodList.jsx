import "./style.css";

import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import { useLocation } from "wouter";

import GoodCard from "../../components/GoodCard/GoodCard";
import GoodCardImage from "../../components/GoodCard/GoodCardImage";

function GoodList() {
  const [products, setProducts] = useState(undefined);
  const [location, setLocation] = useLocation();

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
              image={
                <GoodCardImage
                  src={c.images[0]}
                  alt={`${p.name}, цвет ${c.name}`}
                />
              }
              info={<p>{`${p.name}`}</p>}
              onClick={() => setLocation(`/${p.id}`)}
            />
          ))
        )}
    </article>
  );
}

export default GoodList;
