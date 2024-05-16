import { Form } from "react-hook-form";

// styles in classes only when the form markup is complete
function GoodForm({ action, colors, sizes, ...props }) {
  return (
    <Form style={{ display: "flex", gap: "1rem" }} {...props}>
      <fieldset style={{ display: "flex" }}>{colors}</fieldset>
      <fieldset style={{ display: "flex" }}>{sizes}</fieldset>

      {action}
    </Form>
  );
}

export default GoodForm;
