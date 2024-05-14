import "./style.css";

function GoodCard({ image, info }) {
  return (
    <section className="good-card">
      <main className="good-card__main">
        {image}
      </main>
      <footer className="good-card__footer">
        {info}
      </footer>
    </section>
  );
}

export default GoodCard;
