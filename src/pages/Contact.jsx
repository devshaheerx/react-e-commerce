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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
      {/* header */}
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-500">
          Contact Us
        </h1>
        <p className="text-gray-400 text-base sm:text-lg mt-2">
          Have a question or feedback? We'd love to hear from you.
        </p>
      </div>

      {/* info cards */}
      <div className="flex gap-4 justify-center flex-wrap mb-8">
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 w-full sm:w-auto">
          <div className="bg-purple-100 p-2.5 rounded-full">
            <Mail size={18} className="text-purple-500" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-700 text-sm">Email</h2>
            <p className="text-gray-400 text-sm">support@brandshop.com</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 w-full sm:w-auto">
          <div className="bg-purple-100 p-2.5 rounded-full">
            <Phone size={18} className="text-purple-500" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-700 text-sm">Phone</h2>
            <p className="text-gray-400 text-sm">+1 (800) 123-4567</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 w-full sm:w-auto">
          <div className="bg-purple-100 p-2.5 rounded-full">
            <MapPin size={18} className="text-purple-500" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-700 text-sm">Address</h2>
            <p className="text-gray-400 text-sm">
              123 Brand Street, Karachi, Pakistan
            </p>
          </div>
        </div>
      </div>

      {/* form */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8">
        <form onSubmit={submitHandler}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">Name</label>
              <input
                name="name"
                value={info.name}
                type="text"
                placeholder="Your full name"
                className="border border-gray-200 bg-gray-50 rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-purple-300"
                onChange={getInput}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input
                name="email"
                value={info.email}
                type="email"
                placeholder="you@example.com"
                className="border border-gray-200 bg-gray-50 rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-purple-300"
                onChange={getInput}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">Age</label>
              <input
                name="age"
                value={info.age}
                type="number"
                placeholder="Your age"
                className="border border-gray-200 bg-gray-50 rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-purple-300"
                onChange={getInput}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">Phone</label>
              <input
                name="phone"
                value={info.phone}
                type="tel"
                placeholder="+90 300 1234567"
                className="border border-gray-200 bg-gray-50 rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-purple-300"
                onChange={getInput}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 mb-6">
            <label className="text-sm font-medium text-gray-600">Message</label>
            <textarea
              name="message"
              value={info.message}
              placeholder="Write your message here..."
              rows={5}
              className="border border-gray-200 bg-gray-50 rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-purple-300 resize-none"
              onChange={getInput}
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium text-sm rounded-lg transition active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
