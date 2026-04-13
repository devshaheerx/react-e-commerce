import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

let products = createContext();

function Context({ children }) {
  let [product, setProduct] = useState([]);
  let [error, setError] = useState(null);
  let [categoryLoader, setCategoryLoader] = useState(true);
  let [productLoader, setProductLoader] = useState(true);

  let [selectTab, setSelectTab] = useState("All");
  let [category, setCategory] = useState([]);
  let [filterProduct, setFilterProduct] = useState([]);
  let [search, setSearch] = useState("");

  // load cart from localStorage on first render
  let [cartProduct, setCartProduct] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  let loader = categoryLoader || productLoader;

  // save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProduct));
  }, [cartProduct]);

  async function fetchCategory() {
    try {
      setError(null);
      setCategoryLoader(true);
      let response = await axios.get(import.meta.env.VITE_CATEGORIES);
      setCategory(response.data.map(({ slug }) => slug));
      setCategoryLoader(false);
    } catch (error) {
      setError(error.message);
      setCategoryLoader(false);
    }
  }

  async function fetchProducts() {
    try {
      setError(null);
      setProductLoader(true);
      let response = await axios.get(
        `${import.meta.env.VITE_PRODUCTS}?limit=0`,
      );
      let sortProduct = response.data.products.sort(
        (a, b) => b.rating - a.rating,
      );
      setProduct(sortProduct);
      setFilterProduct(sortProduct);
      setProductLoader(false);
    } catch (error) {
      setError(error.message);
      setProductLoader(false);
    }
  }

  useEffect(() => {
    fetchCategory();
    fetchProducts();
  }, []);

  useEffect(() => {
    let base =
      selectTab === "All"
        ? product
        : product.filter((item) => item.category === selectTab);

    if (search.trim()) {
      base = base.filter(
        (item) =>
          item.title.toLowerCase().includes(search.trim().toLowerCase()) ||
          item.category.toLowerCase().includes(search.trim().toLowerCase()),
      );
    }

    setFilterProduct(base);
  }, [selectTab, product, search]);

  let values = {
    product,
    loader,
    error,
    filterProduct,
    category,
    selectTab,
    setSelectTab,
    search,
    setSearch,
    cartProduct,
    setCartProduct,
  };

  return <products.Provider value={values}>{children}</products.Provider>;
}

function useFetch() {
  const context = useContext(products);
  if (!context) throw new Error("useFetch must be used inside <Context>");
  return context;
}

export { Context, useFetch };
