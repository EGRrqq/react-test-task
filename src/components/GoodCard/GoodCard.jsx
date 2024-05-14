import "./style.css";

function GoodCard({ image, info }) {
  return (
    <section className="good-card">
      <div className="good-card__main">{image}</div>
      <footer className="good-card__footer">{info}</footer>
    </section>
  );
}

export default GoodCard;
