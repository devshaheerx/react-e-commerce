import React from "react";
import { useFetch } from "../context/Context";
import Card from "../components/Card";
import { ShoppingBag } from "lucide-react";

const SHIPPING_THRESHOLD = 50;
const SHIPPING_COST = 5.99;

const Cart = () => {
  let { cartProduct } = useFetch();

  const subtotal = cartProduct.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 1),
    0,
  );
  const shipping =
    subtotal === 0 ? 0 : subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;
  const totalItems = cartProduct.reduce(
    (sum, item) => sum + (item.quantity ?? 1),
    0,
  );

  if (cartProduct.length === 0) {
    return (
      <p className="text-gray-400 text-base sm:text-xl flex items-center justify-center mt-24 px-4 text-center">
        Your cart is empty.
      </p>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-6 sm:py-8 max-w-7xl mx-auto">
      {/* stack on mobile, side-by-side on lg+ */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        {/* product cards — full width on mobile, flex-1 on desktop */}
        <div className="w-full flex flex-wrap justify-center gap-3 sm:gap-4 lg:flex-1">
          {cartProduct.map((item, index) => (
            <Card key={index} item={item} isCart={true} />
          ))}
        </div>

        {/* order summary sidebar — full width on mobile, fixed on desktop */}
        <div className="w-full lg:w-72 shrink-0 lg:sticky lg:top-20">
          <div className="border border-gray-200 rounded-2xl p-4 sm:p-5 bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag size={17} className="text-purple-500" />
              <h2 className="text-sm sm:text-base font-semibold text-gray-700">
                Order Summary
              </h2>
            </div>

            {/* per-item breakdown */}
            <div className="flex flex-col gap-2 mb-4 max-h-48 overflow-y-auto pr-1">
              {cartProduct.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-xs sm:text-sm text-gray-500"
                >
                  <span className="truncate max-w-[160px]">
                    {item.title}{" "}
                    <span className="text-gray-400">×{item.quantity ?? 1}</span>
                  </span>
                  <span className="shrink-0 ml-2 text-gray-700">
                    ${(item.price * (item.quantity ?? 1)).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-3 flex flex-col gap-2">
              <div className="flex justify-between text-xs sm:text-sm text-gray-500">
                <span>
                  Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""})
                </span>
                <span className="text-gray-700">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm text-gray-500">
                <span>Shipping</span>
                {shipping === 0 ? (
                  <span className="text-green-600 font-medium">Free</span>
                ) : (
                  <span className="text-gray-700">${shipping.toFixed(2)}</span>
                )}
              </div>
              {subtotal > 0 && subtotal < SHIPPING_THRESHOLD && (
                <p className="text-xs text-purple-400 mt-0.5">
                  Add ${(SHIPPING_THRESHOLD - subtotal).toFixed(2)} more for
                  free shipping
                </p>
              )}
            </div>

            <div className="border-t border-gray-100 mt-3 pt-3 flex justify-between font-semibold text-gray-800">
              <span className="text-sm sm:text-base">Total</span>
              <span className="text-purple-500 text-base sm:text-lg">
                ${total.toFixed(2)}
              </span>
            </div>

            <button className="cursor-pointer mt-4 w-full py-2.5 sm:py-3 bg-purple-500 hover:bg-purple-600 active:scale-95 transition-all text-white font-medium text-sm rounded-xl">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
