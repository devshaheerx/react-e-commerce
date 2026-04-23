import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center text-sm min-h-[70vh] px-4 text-center">
      <p className="font-medium text-base sm:text-lg text-purple-500">
        404 Error
      </p>
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-gray-800 mt-1">
        Page Not Found
      </h2>
      <p className="text-sm sm:text-base mt-4 text-gray-500 max-w-sm">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={() => navigate("/")}
          type="button"
          className="bg-purple-500 hover:bg-purple-600 px-6 sm:px-7 py-2.5 text-white text-sm sm:text-base rounded active:scale-95 transition-all"
        >
          Go back home
        </button>
      </div>
    </div>
  );
}
