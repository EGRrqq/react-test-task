// styles in classes only when the form markup is complete
function GoodForm({ select, sizes }) {
  return (
    <form style={{ display: "flex", gap: "1rem" }}>
      <section style={{ display: "flex" }}>{select}</section>
      <section style={{ display: "flex" }}>{sizes}</section>
    </form>
  );
}

export default GoodForm;
