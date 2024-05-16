import styles from "./GoodDetailedCard.module.css";

function GoodDetailedCard({ slider, form }) {
  return (
    <article className={`${styles["good-card"]}`}>
      {slider}
      {/* <hr className={`${styles["good-card__hr"]}`} /> */}
      {form}
    </article>
  );
}

export default GoodDetailedCard;
