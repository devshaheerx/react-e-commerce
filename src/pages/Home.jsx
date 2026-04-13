import React from "react";
import Card from "../components/Card";
import { Loader2 } from "lucide-react";
import { useFetch } from "../context/Context";
import Tab from "../components/Tab";

const Home = () => {
  let { filterProduct, loader, error } = useFetch();

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
    <>
      <Tab />
      <div className="flex items-center justify-center flex-wrap gap-3 px-3 sm:px-4 pb-8">
        {filterProduct.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
