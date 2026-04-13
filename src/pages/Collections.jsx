import React from "react";
import { useFetch } from "../context/Context";
import Card from "../components/Card";
import { Loader2 } from "lucide-react";

const Collections = () => {
  let { product, category, loader, error } = useFetch();

  if (loader)
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-purple-500" size={35} />
      </div>
    );

  if (error)
    return (
      <h1 className="h-screen flex items-center justify-center text-2xl font-bold text-red-400 px-4 text-center">
        {error}
      </h1>
    );

  return (
    <div className="px-4 sm:px-6 lg:px-10 mt-6 pb-10">
      {category.map((cat, catindex) => (
        <div key={catindex} className="mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl uppercase text-purple-500 font-bold mb-4">
            {cat}
          </h1>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {product
              .filter((item) => item.category === cat)
              .map((value, productindex) => (
                <Card key={productindex} item={value} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collections;
