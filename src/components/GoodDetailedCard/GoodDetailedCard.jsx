import styles from "./GoodDetailedCard.module.css";

function GoodDetailedCard({ slider, form }) {
  return (
    <article className={`${styles["good-card"]}`}>
      {slider}
      {form}
    </article>
  );
}

export default GoodDetailedCard;
