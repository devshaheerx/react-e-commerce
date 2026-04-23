import React from "react";
import Card from "../components/Card";
import { Loader2 } from "lucide-react";
import { useFetch } from "../context/Context";
import Tab from "../components/Tab";

const Home = () => {
  let { filterProduct, loader, error } = useFetch();

  if (loader)
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-purple-500" size={35} />
      </div>
    );

  if (error)
    return (
      <h1 className="h-[60vh] flex items-center justify-center text-xl sm:text-2xl font-bold text-red-400 px-4 text-center">
        {error}
      </h1>
    );

  return (
    <>
      <Tab />
      {filterProduct.length === 0 ? (
        <p className="text-center text-gray-400 mt-16 text-sm sm:text-base px-4">
          No products found.
        </p>
      ) : (
        // FIXED: 2-col grid on small phones, then flex-wrap on larger
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 px-3 sm:px-4 pb-8">
          {filterProduct.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
