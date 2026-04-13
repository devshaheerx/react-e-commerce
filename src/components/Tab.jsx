import { useFetch } from "../context/Context";

export default function Tab() {
  let { category, selectTab, setSelectTab } = useFetch();

  return (
    <div className="flex gap-2 justify-start sm:justify-center my-4 mx-3 p-1 flex-wrap overflow-x-auto">
      <button
        onClick={() => setSelectTab("All")}
        className={`px-4 py-1.5 text-sm border rounded-full capitalize transition-all duration-200 whitespace-nowrap
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
          className={`px-4 py-1.5 text-sm border rounded-full capitalize transition-all duration-200 whitespace-nowrap
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
