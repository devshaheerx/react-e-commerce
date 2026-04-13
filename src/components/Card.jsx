import { Plus, ShoppingCart, Trash2 } from "lucide-react";
import React from "react";
import { useFetch } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Card = ({ item, isCart }) => {
  let { title, thumbnail, category, rating, price } = item;
  let { cartProduct, setCartProduct } = useFetch();
  const navigate = useNavigate();

  function addCartHandler() {
    setCartProduct([...cartProduct, item]);
  }

  function removeCartHandler() {
    const index = cartProduct.findIndex((p) => p.id === item.id);
    const updatedCart = [...cartProduct];
    updatedCart.splice(index, 1);
    setCartProduct(updatedCart);
  }

  return (
    <div className="border border-gray-200 rounded-xl px-3 py-3 bg-white w-full sm:w-52 md:w-56 lg:w-60 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-md">
      <div
        onClick={() => navigate(`/detail/${item.id}`)}
        className="group cursor-pointer flex items-center justify-center px-2"
      >
        <img
          className="group-hover:scale-105 transition-all duration-300 w-32 h-36 sm:w-36 sm:h-40 object-contain"
          src={thumbnail}
          alt={title}
        />
      </div>

      <div className="text-gray-500/60 text-sm mt-2">
        <p className="text-xs capitalize">{category}</p>
        <p className="text-gray-700 font-medium text-base truncate w-full">
          {title}
        </p>

        <div className="flex items-center gap-0.5 mt-1">
          {Array(5)
            .fill("")
            .map((_, i) =>
              Math.round(rating) > i ? (
                <svg
                  key={i}
                  width="13"
                  height="12"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <path
                    d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z"
                    fill="#A851FF"
                  />
                </svg>
              ) : (
                <svg
                  key={i}
                  width="13"
                  height="12"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <path
                    d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z"
                    fill="#615fff"
                    fillOpacity="0.35"
                  />
                </svg>
              ),
            )}
          <p className="text-xs ml-1">{Math.round(rating)}</p>
        </div>

        <div className="flex items-end justify-between mt-3">
          <p className="text-base font-medium text-purple-500">
            ${price}{" "}
            <span className="text-gray-400 text-xs line-through">
              ${Math.round(price + price * 0.1)}
            </span>
          </p>

          {isCart ? (
            <div className="flex items-center gap-2">
              <button
                onClick={removeCartHandler}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 border border-red-300 text-red-500 hover:bg-red-200 transition cursor-pointer"
              >
                <Trash2 size={15} />
              </button>
              <button
                onClick={addCartHandler}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 border border-purple-300 text-purple-600 hover:bg-purple-200 transition cursor-pointer"
              >
                <Plus size={18} />
              </button>
            </div>
          ) : (
            <button
              onClick={addCartHandler}
              className="flex items-center justify-center gap-1 cursor-pointer bg-purple-100 border border-purple-300 px-3 h-8 rounded-lg text-purple-600 text-sm font-medium hover:shadow-md hover:bg-purple-200 transition"
            >
              <ShoppingCart size={15} />
              <p>Add</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
