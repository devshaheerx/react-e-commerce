import { UserButton, useUser } from "@clerk/react";
import { Menu, Search, ShoppingCart, X, Zap } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useFetch } from "../context/Context";

const Navbar = () => {
  const { user } = useUser();
  let navigate = useNavigate();
  let location = useLocation();
  let { search, setSearch, cartProduct } = useFetch();
  const [open, setOpen] = useState(false);

  const totalQty = cartProduct.reduce(
    (sum, item) => sum + (item.quantity ?? 1),
    0,
  );

  let nav_items = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/collections", name: "Collections" },
    { to: "/contact", name: "Contact" },
  ];

  // NEW: when user types, update search AND redirect to home if not already there
  function handleSearch(e) {
    const value = e.target.value;
    setSearch(value);
    if (location.pathname !== "/") {
      navigate("/");
    }
    window.scrollTo(0, 0);
  }

  // NEW: clear search when user manually closes it or navigates away
  function handleClear() {
    setSearch("");
  }

  return (
    <>
      <div className="h-14 sm:h-16 w-full border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-10 shadow-sm sticky top-0 z-50 bg-white">
        {/* logo */}
        <div
          className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-2xl font-bold text-purple-500 cursor-pointer shrink-0"
          onClick={() => {
            navigate("/");
            handleClear();
          }}
        >
          <Zap size={24} className="sm:w-7 sm:h-7" />
          <p className="font-semibold">Brand Shop</p>
        </div>

        {/* nav items */}
        <div className="hidden md:flex gap-4 lg:gap-6 text-sm lg:text-base">
          {nav_items.map((items, index) => (
            <NavLink
              key={index}
              to={items.to}
              onClick={handleClear}
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

        {/* search — desktop */}
        <div className="border rounded-full px-3 hidden lg:flex items-center text-sm gap-2 w-48 xl:w-64">
          <Search size={16} className="text-gray-400 shrink-0" />
          <input
            value={search}
            onChange={handleSearch}
            type="text"
            placeholder="Search here"
            className="py-1.5 w-full bg-transparent outline-none placeholder-purple-400 text-sm"
          />
          {/* NEW: small clear button appears when search has text */}
          {search && (
            <button
              onClick={handleClear}
              className="text-gray-400 hover:text-gray-600 shrink-0"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* right side */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <span className="absolute -top-2 -right-2 text-xs text-white font-bold bg-purple-500 w-4 h-4 rounded-full flex items-center justify-center leading-none">
              {totalQty}
            </span>
            <ShoppingCart size={20} className="sm:w-5.5 sm:h-5.5" />
          </div>

          <div className="hidden md:flex items-center gap-2">
            <UserButton />
            <span className="text-sm font-medium text-purple-500 truncate max-w-20 lg:max-w-30">
              {user?.fullName || user?.firstName || "User"}
            </span>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden text-purple-500 p-1"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      {open && (
        <div className="md:hidden fixed top-14 sm:top-16 left-0 w-full bg-white border-b border-gray-200 shadow-lg z-40 flex flex-col px-5 py-4 gap-4">
          {nav_items.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              onClick={() => {
                setOpen(false);
                handleClear();
              }}
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
            <Search size={15} />
            <input
              value={search}
              onChange={handleSearch}
              type="text"
              placeholder="Search here"
              className="py-1.5 w-full bg-transparent outline-none placeholder-purple-400"
            />
            {search && (
              <button
                onClick={handleClear}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 pb-1">
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
