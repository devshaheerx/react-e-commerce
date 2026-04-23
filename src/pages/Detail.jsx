import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../context/Context";
import {
  ShoppingCart,
  ArrowLeft,
  Loader2,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cartProduct, setCartProduct } = useFetch();
  const [item, setItem] = useState(null);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoader(true);
        const res = await axios.get(`${import.meta.env.VITE_PRODUCTS}/${id}`);
        setItem(res.data);
        setLoader(false);
      } catch (err) {
        setError(err.message);
        setLoader(false);
      }
    }
    fetchProduct();
  }, [id]);

  const cartEntry = item ? cartProduct.find((p) => p.id === item.id) : null;
  const qty = cartEntry?.quantity ?? 0;

  function addCartHandler() {
    if (!item) return;
    const exists = cartProduct.find((p) => p.id === item.id);
    if (exists) {
      setCartProduct(
        cartProduct.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p,
        ),
      );
    } else {
      setCartProduct([...cartProduct, { ...item, quantity: 1 }]);
    }
  }

  function removeCartHandler() {
    if (!item) return;
    const exists = cartProduct.find((p) => p.id === item.id);
    if (exists?.quantity === 1) {
      setCartProduct(cartProduct.filter((p) => p.id !== item.id));
    } else {
      setCartProduct(
        cartProduct.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity - 1 } : p,
        ),
      );
    }
  }

  if (loader)
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-purple-500" size={35} />
      </div>
    );

  if (error)
    return (
      <div className="h-[60vh] flex items-center justify-center text-red-400 text-base sm:text-lg px-4 text-center">
        {error}
      </div>
    );

  if (!item) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
      {/* back */}
      <button
        onClick={() => navigate(-1)}
        className="cursor-pointer flex items-center gap-1 text-sm text-gray-400 hover:text-purple-500 transition mb-5 sm:mb-6"
      >
        <ArrowLeft size={15} /> Back
      </button>

      {/* product — stacks on mobile, side-by-side on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {/* image */}
        <div className="bg-gray-50 rounded-2xl flex items-center justify-center p-6 sm:p-8 min-h-48 sm:min-h-56">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="max-h-40 sm:max-h-64 object-contain w-full"
          />
        </div>

        {/* info */}
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-widest text-gray-400">
            {item.category}
          </p>
          <h1 className="text-lg sm:text-2xl font-semibold text-gray-800 leading-snug">
            {item.title}
          </h1>
          <p className="text-sm text-gray-400">by {item.brand}</p>

          {/* rating */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-purple-500 text-sm tracking-wide">
              {"★".repeat(Math.round(item.rating))}
              {"☆".repeat(5 - Math.round(item.rating))}
            </span>
            <span className="text-xs text-gray-400">
              {item.rating.toFixed(1)} · {item.reviews.length} reviews
            </span>
          </div>

          {/* price */}
          <div className="flex items-baseline gap-2 sm:gap-3 py-3 border-t border-b border-gray-100 flex-wrap">
            <span className="text-xl sm:text-2xl font-semibold text-blue-500">
              ${item.price}
            </span>
            <span className="text-sm text-gray-400 line-through">
              ${Math.round(item.price + item.price * 0.1)}
            </span>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
              {Math.round(item.discountPercentage)}% off
            </span>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed">
            {item.description}
          </p>

          {/* details */}
          <div className="text-sm flex flex-col gap-1.5">
            <div className="flex justify-between gap-4">
              <span className="text-gray-400 shrink-0">Availability</span>
              <span className="text-green-600 font-medium text-right">
                {item.availabilityStatus}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-gray-400 shrink-0">Shipping</span>
              <span className="text-gray-600 text-right">
                {item.shippingInformation}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-gray-400 shrink-0">Warranty</span>
              <span className="text-gray-600 text-right">
                {item.warrantyInformation}
              </span>
            </div>
          </div>

          {/* add to cart / qty controls */}
          {qty > 0 ? (
            <div className="flex items-center justify-between mt-2 border border-purple-200 rounded-xl px-4 py-3">
              <span className="text-sm text-gray-500">In cart</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={removeCartHandler}
                  className="cursor-pointer flex items-center justify-center w-8 h-8 rounded-full bg-red-100 border border-red-300 text-red-500 hover:bg-red-200 transition"
                >
                  {qty === 1 ? <Trash2 size={14} /> : <Minus size={14} />}
                </button>
                <span className="font-semibold text-gray-700 text-base min-w-[20px] text-center">
                  {qty}
                </span>
                <button
                  onClick={addCartHandler}
                  className="cursor-pointer flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 border border-purple-300 text-purple-600 hover:bg-purple-200 transition"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={addCartHandler}
              className="cursor-pointer flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 active:scale-95 transition-all text-white font-medium py-3 rounded-xl mt-2 text-sm sm:text-base"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          )}
        </div>
      </div>

      {/* reviews */}
      <div className="mt-8 sm:mt-10 border-t border-gray-100 pt-5 sm:pt-6">
        <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-4">
          Reviews
        </h2>
        <div className="flex flex-col gap-3">
          {item.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl px-3 sm:px-4 py-3 flex items-start gap-2 sm:gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-semibold shrink-0">
                {review.reviewerName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-700">
                  {review.reviewerName}
                </p>
                <p className="text-xs text-gray-400 mt-0.5 break-words">
                  {review.comment}
                </p>
              </div>
              <span className="ml-auto text-xs text-purple-400 font-medium shrink-0 pt-0.5">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
