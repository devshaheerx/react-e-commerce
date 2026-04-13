import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../context/Context";
import { ShoppingCart, ArrowLeft, Loader2 } from "lucide-react";
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

  function addCartHandler() {
    setCartProduct([...cartProduct, item]);
  }

  if (loader)
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-purple-500" size={35} />
      </div>
    );

  if (error)
    return (
      <div className="h-screen flex items-center justify-center text-red-400 text-lg px-4 text-center">
        {error}
      </div>
    );

  if (!item) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
      {/* back */}
      <button
        onClick={() => navigate(-1)}
        className="cursor-pointer flex items-center gap-1 text-sm text-gray-400 hover:text-purple-500 transition mb-6"
      >
        <ArrowLeft size={15} /> Back
      </button>

      {/* product */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {/* image */}
        <div className="bg-gray-50 rounded-2xl flex items-center justify-center p-6 sm:p-8 min-h-56">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="max-h-48 sm:max-h-64 object-contain"
          />
        </div>

        {/* info */}
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-widest text-gray-400">
            {item.category}
          </p>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 leading-snug">
            {item.title}
          </h1>
          <p className="text-sm text-gray-400">by {item.brand}</p>

          {/* rating */}
          <div className="flex items-center gap-2">
            <span className="text-purple-500 text-sm tracking-wide">
              {"★".repeat(Math.round(item.rating))}
              {"☆".repeat(5 - Math.round(item.rating))}
            </span>
            <span className="text-xs text-gray-400">
              {item.rating.toFixed(1)} · {item.reviews.length} reviews
            </span>
          </div>

          {/* price */}
          <div className="flex items-baseline gap-3 py-3 border-t border-b border-gray-100 flex-wrap">
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
            <div className="flex justify-between">
              <span className="text-gray-400">Availability</span>
              <span className="text-green-600 font-medium">
                {item.availabilityStatus}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Shipping</span>
              <span className="text-gray-600 text-right ml-4">
                {item.shippingInformation}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Warranty</span>
              <span className="text-gray-600 text-right ml-4">
                {item.warrantyInformation}
              </span>
            </div>
          </div>

          {/* add to cart */}
          <button
            onClick={addCartHandler}
            className="cursor-pointer flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 active:scale-95 transition-all text-white font-medium py-3 rounded-xl mt-2"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* reviews */}
      <div className="mt-10 border-t border-gray-100 pt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Reviews</h2>
        <div className="flex flex-col gap-3">
          {item.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl px-4 py-3 flex items-start gap-3"
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
                <p className="text-xs text-gray-400 mt-0.5 wrap-break-word">
                  {review.comment}
                </p>
              </div>
              <span className="ml-auto text-xs text-purple-400 font-medium shrink-0">
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
