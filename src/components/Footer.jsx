import { Heart, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-10 bg-purple-500 py-6 text-white">
      <div className="flex flex-col items-center gap-3 px-4 text-center">
        <div className="flex items-center gap-2 text-xl sm:text-2xl font-bold">
          <Zap size={24} />
          <span>Brand Shop</span>
        </div>
        <p className="text-purple-200 text-sm">
          Your one-stop shop for the best brands.
        </p>
        <div className="w-24 border-t border-purple-300 my-1" />
        <p className="flex items-center gap-1 text-xs text-purple-200">
          Made with <Heart size={12} fill="white" stroke="none" /> ©{" "}
          {new Date().getFullYear()} Brand Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
