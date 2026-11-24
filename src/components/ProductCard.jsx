import "./ProductCard.css";

function ProductCard({ title, price, category, inStock, onAddToCart, children, style }) {
  return (
    <article className="product-card" style={style}>
      <div className="product-card-header">
        <h2>{title}</h2>
        {children}
      </div>
      <p className="product-category">{category}</p>
      <p className="product-price">PHP {price.toLocaleString()}</p>
      <p className={inStock ? "in-stock" : "out-of-stock"}>
        {inStock ? "In stock" : "Out of stock"}
      </p>
      <button
        type="button"
        onClick={() => onAddToCart(title)}
        disabled={!inStock}
      >
        Add to Cart
      </button>
    </article>
  );
}

export default ProductCard;
