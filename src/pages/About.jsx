import { Zap, ShieldCheck, Truck, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={26} className="text-purple-500" />,
    title: "Trusted Quality",
    desc: "Every product is carefully selected and verified for the best quality standards.",
  },
  {
    icon: <Truck size={26} className="text-purple-500" />,
    title: "Fast Delivery",
    desc: "We deliver your orders quickly and safely right to your doorstep.",
  },
  {
    icon: <HeadphonesIcon size={26} className="text-purple-500" />,
    title: "24/7 Support",
    desc: "Our support team is always available to help you with any queries.",
  },
];

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-14">
      {/* hero */}
      <div className="flex flex-col items-center text-center gap-3 sm:gap-4 mb-8 sm:mb-12">
        <div className="flex items-center gap-2 text-2xl sm:text-4xl font-bold text-purple-500">
          <Zap size={28} className="sm:w-[34px] sm:h-[34px]" />
          <h1>Brand Shop</h1>
        </div>
        <p className="text-gray-500 text-sm sm:text-lg max-w-xs sm:max-w-xl">
          We are a modern e-commerce platform dedicated to bringing you the best
          products from top brands around the world — all in one place.
        </p>
      </div>

      {/* features — 1-col mobile, 3-col sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center gap-2 sm:gap-3 border border-gray-200 rounded-xl p-5 sm:p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            {f.icon}
            <h3 className="font-semibold text-gray-700 text-base sm:text-lg">
              {f.title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* mission */}
      <div className="bg-purple-50 rounded-2xl p-5 sm:p-8 text-center">
        <h2 className="text-lg sm:text-2xl font-bold text-purple-500 mb-2 sm:mb-3">
          Our Mission
        </h2>
        <p className="text-gray-500 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
          Our mission is to make online shopping simple, affordable, and
          enjoyable for everyone. We believe everyone deserves access to great
          products without breaking the bank. That's why we work hard every day
          to bring you the best deals from the best brands.
        </p>
      </div>
    </div>
  );
};

export default About;
