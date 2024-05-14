import "./style.css";

function GoodCard({ image, info }) {
  return (
    <section className="good-card">
      {image}
      <footer>{info}</footer>
    </section>
  );
}

export default GoodCard;
