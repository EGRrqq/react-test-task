import styles from "./GoodDetailedCard.module.css";
import useWindowWidth from "../../hooks/useWindowWidth";

function GoodDetailedCard({ slider, form, info, price }) {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 1124;

  if (isMobile) {
    return (
      <article className={`${styles["good-card"]}`}>
        <section className={`${styles["data-wrapper"]}`}>
          {info}
          {price}
        </section>

        <hr className={`${styles["good-card__hr"]}`} />
        {slider}
        <hr className={`${styles["good-card__hr"]}`} />

        {form}
      </article>
    );
  }

  return (
    <article className={`${styles["good-card"]}`}>
      {slider}

      <hr className={`${styles["good-card__hr"]}`} />

      <section className={`${styles["data-wrapper"]}`}>
        {info}
        {price}
        {form}
      </section>
    </article>
  );
}

export default GoodDetailedCard;
