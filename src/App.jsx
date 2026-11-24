import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  const handleAddToCart = (title) => {
    setCount((currentCount) => currentCount + 1);
    setLastAdded(title);
  };

  return (
    <div className="app">
      <header>
        <h1>CvSU Mini Store</h1>
        <p className="cart-message">
          {count === 0
            ? "Your cart is empty."
            : `Items added to cart: ${count} (Last added: ${lastAdded})`}
        </p>
      </header>

      <div className="grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            title={p.title}
            price={p.price}
            category={p.category}
            inStock={p.inStock}
            onAddToCart={handleAddToCart}
          >
            {p.id === 2 && <span>New</span>}
            {p.id === 8 && <span>Sale</span>}
          </ProductCard>
        ))}
      </div>
    </div>
  );
}

export default App;
