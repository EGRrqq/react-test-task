function GoodDetailedCard({ slider, select, sizes }) {
  return (
    <article>
      {slider}
      <form style={{ display: "flex", gap: "1rem" }}>
        {select}
        {sizes}
      </form>
    </article>
  );
}

export default GoodDetailedCard;
