import { useFetch } from "../context/Context";

export default function Tab() {
  let { category, selectTab, setSelectTab } = useFetch();

  return (
    // FIXED: horizontal scroll on mobile so tabs never wrap messily
    <div className="flex gap-2 my-4 mx-3 sm:mx-4 p-1 overflow-x-auto scrollbar-hide sm:flex-wrap sm:justify-center">
      <button
        onClick={() => setSelectTab("All")}
        className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm border rounded-full capitalize transition-all duration-200 whitespace-nowrap shrink-0
          ${
            selectTab === "All"
              ? "text-white font-bold border-purple-400 bg-purple-500 shadow-md"
              : "border-gray-200 hover:border-purple-400 hover:text-purple-500 hover:bg-purple-50 active:scale-95"
          }`}
      >
        All
      </button>
      {category.map((item, index) => (
        <button
          key={index}
          onClick={() => setSelectTab(item)}
          className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm border rounded-full capitalize transition-all duration-200 whitespace-nowrap shrink-0
            ${
              selectTab === item
                ? "text-white font-bold border-purple-400 bg-purple-500 shadow-md"
                : "border-gray-200 hover:border-purple-400 hover:text-purple-500 hover:bg-purple-50 active:scale-95"
            }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
