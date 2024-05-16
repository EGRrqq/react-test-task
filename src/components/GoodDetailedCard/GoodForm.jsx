import styles from "./GoodDetailedCard.module.css";
import { Form } from "react-hook-form";

// styles in classes only when the form markup is complete
function GoodForm({ action, colors, sizes, ...props }) {
  return (
    <Form className={`${styles["good-form"]}`} {...props}>
      <fieldset className={`${styles["good-form--fieldset"]}`}>
        {colors}
      </fieldset>
      <fieldset className={`${styles["good-form--fieldset"]}`}>
        {sizes}
      </fieldset>

      {action}
    </Form>
  );
}

export default GoodForm;
