import { useState, useEffect } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const handleAddToCart = (title) => {
    setCount((currentCount) => currentCount + 1);
    setLastAdded(title);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchText]);

  const keyword = debouncedSearch.trim().toLowerCase();

  let filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(keyword) &&
      (category === "All" || p.category === category)
  );

  filteredProducts = [...filteredProducts];
  if (sortOrder === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  useEffect(() => {
    document.title = `CvSU Mini Store (${filteredProducts.length} results)`;
  }, [filteredProducts.length]);

  const handleClearFilters = () => {
    setSearchText("");
    setDebouncedSearch("");
    setCategory("All");
    setSortOrder("default");
  };

  return (
    <div className="app">
      <header>
        <h1>CvSU Mini Store</h1>
      </header>

      <div className="toolbar">
        {count > 0 && (
          <p className="cart-message">
            Items added to cart: {count} (Last added: {lastAdded})
          </p>
        )}

        <SearchBar
          searchText={searchText}
          onSearchChange={setSearchText}
          category={category}
          onCategoryChange={setCategory}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
          onClear={handleClearFilters}
        />
      </div>

      <p className="results-count">
        Showing {filteredProducts.length} of {products.length} products
      </p>

      {filteredProducts.length === 0 ? (
        <p className="empty-state">
          No products found. Try a different keyword or category.
        </p>
      ) : (
        <div className="grid">
          {filteredProducts.map((p, index) => (
            <ProductCard
              key={p.id}
              title={p.title}
              price={p.price}
              category={p.category}
              inStock={p.inStock}
              onAddToCart={handleAddToCart}
              style={{ animationDelay: `${Math.min(index, 7) * 60}ms` }}
            >
              {p.id === 2 && <span>New</span>}
              {p.id === 8 && <span>Sale</span>}
            </ProductCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
