import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";

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
        products.map((i) => (
          <section key={i.id}>
            <h1>{i.name}</h1>
          </section>
        ))}
    </article>
  );
}

export default GoodList;
