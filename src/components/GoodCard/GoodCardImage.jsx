import styles from "./GoodCard.module.css";

function GoodCardImage({ src, alt }) {
  return <img className={styles["good-card__main-img"]} src={src} alt={alt} />;
}

export default GoodCardImage;
