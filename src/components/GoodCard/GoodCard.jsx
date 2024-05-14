import "./style.css";

function GoodCard({ image, info, onClick }) {
  return (
    <section className="good-card" onClick={onClick}>
      <div className="good-card__main">{image}</div>
      <footer className="good-card__footer">{info}</footer>
    </section>
  );
}

export default GoodCard;
