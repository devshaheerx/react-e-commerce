import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  let [info, setInfo] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    message: "",
  });

  function getInput(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    if (!info.name || !info.email || !info.message) {
      toast.error("All required fields must be filled!");
    } else {
      toast.success(
        `${info.name} your feedback have been submitted successfully!`,
      );
      setInfo({ name: "", email: "", age: "", phone: "", message: "" });
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
      {/* header */}
      <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-purple-500">
          Contact Us
        </h1>
        <p className="text-gray-400 text-sm sm:text-lg mt-2 max-w-sm sm:max-w-none">
          Have a question or feedback? We'd love to hear from you.
        </p>
      </div>

      {/* info cards — stack on xs, row on sm+ */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
        {[
          {
            icon: <Mail size={17} className="text-purple-500" />,
            label: "Email",
            value: "support@brandshop.com",
          },
          {
            icon: <Phone size={17} className="text-purple-500" />,
            label: "Phone",
            value: "+1 (800) 123-4567",
          },
          {
            icon: <MapPin size={17} className="text-purple-500" />,
            label: "Address",
            value: "123 Brand Street, Karachi, Pakistan",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 w-full sm:w-auto"
          >
            <div className="bg-purple-100 p-2 sm:p-2.5 rounded-full shrink-0">
              {card.icon}
            </div>
            <div className="min-w-0">
              <h2 className="font-semibold text-gray-700 text-sm">
                {card.label}
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm truncate">
                {card.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* form */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-8">
        <form onSubmit={submitHandler}>
          {/* FIXED: 1-col on mobile, 2-col on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
            {[
              {
                name: "name",
                label: "Name",
                type: "text",
                placeholder: "Your full name",
              },
              {
                name: "email",
                label: "Email",
                type: "email",
                placeholder: "you@example.com",
              },
              {
                name: "age",
                label: "Age",
                type: "number",
                placeholder: "Your age",
              },
              {
                name: "phone",
                label: "Phone",
                type: "tel",
                placeholder: "+92 300 1234567",
              },
            ].map((field) => (
              <div key={field.name} className="flex flex-col gap-1">
                <label className="text-xs sm:text-sm font-medium text-gray-600">
                  {field.label}
                </label>
                <input
                  name={field.name}
                  value={info[field.name]}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="border border-gray-200 bg-gray-50 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-purple-300"
                  onChange={getInput}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1 mb-5 sm:mb-6">
            <label className="text-xs sm:text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              name="message"
              value={info.message}
              placeholder="Write your message here..."
              rows={4}
              className="border border-gray-200 bg-gray-50 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-purple-300 resize-none"
              onChange={getInput}
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full py-2.5 sm:py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium text-sm rounded-lg transition active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
