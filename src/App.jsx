import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [lastAdded, setLastAdded] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const count = cart.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
    setLastAdded(product.title);
  };

  return (
    <div className="app">
      <header>
        <div className="header-top">
          <h1>CvSU Mini Store</h1>
          <div className="cart">
            <button
              className="cart__toggle"
              type="button"
              aria-expanded={isCartOpen}
              aria-controls="cart-dropdown"
              onClick={() => setIsCartOpen((isOpen) => !isOpen)}
            >
              <span aria-hidden="true">🛒</span> Cart
              <span className="cart__count">{count}</span>
            </button>
            {isCartOpen && (
              <div className="cart__dropdown" id="cart-dropdown">
                <h2>Your Cart</h2>
                {cart.length === 0 ? (
                  <p className="cart__empty">Your cart is empty.</p>
                ) : (
                  <ul className="cart__items">
                    {cart.map((item) => (
                      <li key={item.id}>
                        <span>{item.title}</span>
                        <span className="cart__quantity">× {item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
        <p className="cart-message" role="status" aria-live="polite">
          {count === 0
            ? "Your cart is empty."
            : `Items added to cart: ${count} (Last added: ${lastAdded})`}
        </p>
      </header>

      <div className="grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
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
