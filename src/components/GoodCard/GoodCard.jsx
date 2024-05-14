import styles from "./GoodCard.module.css";

function GoodCard({ image, info, onClick }) {
  return (
    <section className={styles["good-card"]} onClick={onClick}>
      <div className={styles["good-card__main"]}>{image}</div>
      <footer className={styles["good-card__footer"]}>{info}</footer>
    </section>
  );
}

export default GoodCard;
