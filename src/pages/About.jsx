import { Zap, ShieldCheck, Truck, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={28} className="text-purple-500" />,
    title: "Trusted Quality",
    desc: "Every product is carefully selected and verified for the best quality standards.",
  },
  {
    icon: <Truck size={28} className="text-purple-500" />,
    title: "Fast Delivery",
    desc: "We deliver your orders quickly and safely right to your doorstep.",
  },
  {
    icon: <HeadphonesIcon size={28} className="text-purple-500" />,
    title: "24/7 Support",
    desc: "Our support team is always available to help you with any queries.",
  },
];

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
      {/* hero */}
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <div className="flex items-center gap-2 text-3xl sm:text-4xl font-bold text-purple-500">
          <Zap size={34} />
          <h1>Brand Shop</h1>
        </div>
        <p className="text-gray-500 text-base sm:text-lg max-w-xl">
          We are a modern e-commerce platform dedicated to bringing you the best
          products from top brands around the world — all in one place.
        </p>
      </div>

      {/* features */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center gap-3 border border-gray-200 rounded-xl p-6 w-full sm:w-60 lg:w-64 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            {f.icon}
            <h3 className="font-semibold text-gray-700 text-lg">{f.title}</h3>
            <p className="text-gray-400 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* mission */}
      <div className="bg-purple-50 rounded-2xl p-6 sm:p-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-500 mb-3">
          Our Mission
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
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
