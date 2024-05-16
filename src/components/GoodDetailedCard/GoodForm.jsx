// styles in classes only when the form markup is complete
function GoodForm({ onSubmit, colors, sizes }) {
  return (
    <form style={{ display: "flex", gap: "1rem" }} onSubmit={onSubmit}>
      <fieldset style={{ display: "flex" }}>{colors}</fieldset>
      <fieldset style={{ display: "flex" }}>{sizes}</fieldset>

      <button type="submit">bruh</button>
    </form>
  );
}

export default GoodForm;
