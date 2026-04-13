import { UserButton, useUser } from "@clerk/react";
import { Menu, Search, ShoppingCart, X, Zap } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFetch } from "../context/Context";

const Navbar = () => {
  const { user } = useUser();
  let navigate = useNavigate();
  let { search, setSearch, cartProduct } = useFetch();
  const [open, setOpen] = useState(false);

  let nav_items = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/collections", name: "Collections" },
    { to: "/contact", name: "Contact" },
  ];

  return (
    <>
      <div className="h-16 w-full border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-10 shadow-sm sticky top-0 z-50 bg-white">
        {/* logo */}
        <div
          className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-purple-500 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Zap size={28} />
          <p className="font-semibold">Brand Shop</p>
        </div>

        {/* nav items - hidden on mobile */}
        <div className="hidden md:flex gap-4 lg:gap-6 text-sm lg:text-base">
          {nav_items.map((items, index) => (
            <NavLink
              key={index}
              to={items.to}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-purple-500 italic underline"
                  : "hover:text-purple-500 transition"
              }
            >
              {items.name}
            </NavLink>
          ))}
        </div>

        {/* search - hidden on mobile and small tablets */}
        <div className="border rounded-full px-3 hidden lg:flex items-center text-sm gap-2 w-48 xl:w-64">
          <Search size={18} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search here"
            className="py-1.5 w-full bg-transparent outline-none placeholder-purple-400 text-sm"
          />
        </div>

        {/* right side icons */}
        <div className="flex items-center gap-4">
          {/* cart */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <p className="absolute -top-2 -right-2 text-xs text-white font-bold bg-purple-500 w-4 h-4 rounded-full flex items-center justify-center">
              {cartProduct.length}
            </p>
            <ShoppingCart size={22} />
          </div>

          {/* user - hidden on mobile */}
          <div className="hidden md:flex items-center gap-2">
            <UserButton />
            <span className="text-sm font-medium text-purple-500 truncate max-w-24">
              {user?.fullName || user?.firstName || "User"}
            </span>
          </div>

          {/* hamburger - mobile only */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden text-purple-500"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      {open && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white border-b border-gray-200 shadow-lg z-40 flex flex-col px-6 py-4 gap-4">
          {nav_items.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-purple-500 italic underline text-sm"
                  : "text-gray-700 hover:text-purple-500 text-sm"
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* mobile search */}
          <div className="border rounded-full px-3 flex items-center text-sm gap-2">
            <Search size={16} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search here"
              className="py-1.5 w-full bg-transparent outline-none placeholder-purple-400"
            />
          </div>

          {/* mobile user */}
          <div className="flex items-center gap-2">
            <UserButton />
            <span className="text-sm font-medium text-purple-500 truncate">
              {user?.fullName || user?.firstName || "User"}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
