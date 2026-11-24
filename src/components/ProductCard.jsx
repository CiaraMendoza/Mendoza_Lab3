import "./ProductCard.css";

function ProductCard({ id, title, price, category = "General", inStock, onAddToCart, children }) {
  const formattedPrice = price.toLocaleString("en-PH", {
    style: "currency",
    currency: "PHP",
  });

  return (
    <div className={`card ${inStock ? "" : "card--out"}`}>
      {children && <div className="card__badge">{children}</div>}
      <h3>{title}</h3>
      <p className="card__category">{category}</p>
      <p className="card__price">{formattedPrice}</p>
      <p className={inStock ? "stock stock--in" : "stock stock--out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
      <button
        type="button"
        disabled={!inStock}
        onClick={() => onAddToCart({ id, title, price })}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
