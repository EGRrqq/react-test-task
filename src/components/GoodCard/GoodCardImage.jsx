import "./style.css";

function GoodCardImage({ src, alt }) {
  return <img className="good-card__image" src={src} alt={alt} />;
}

export default GoodCardImage;
