import React from "react";
import { useFetch } from "../context/Context";
import Card from "../components/Card";

const Cart = () => {
  let { cartProduct } = useFetch();

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-8">
      {cartProduct.length === 0 ? (
        <p className="text-gray-400 text-lg sm:text-xl flex items-center justify-center mt-20">
          Your cart is empty.
        </p>
      ) : (
        <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4">
          {cartProduct.map((item, index) => (
            <Card key={index} item={item} isCart={true} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
