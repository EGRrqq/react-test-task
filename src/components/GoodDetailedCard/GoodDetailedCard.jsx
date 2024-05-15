function GoodDetailedCard({ slider, select, sizes }) {
  return (
    <article>
      {slider}
      <section style={{ display: "flex", gap: "1rem" }}>
        {select}
        {sizes}
      </section>
    </article>
  );
}

export default GoodDetailedCard;
