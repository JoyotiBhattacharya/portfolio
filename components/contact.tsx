"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("Message sent successfully ✅");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("");
      }, 4000);
    } else {
      setStatus("Something went wrong ❌");

      setTimeout(() => {
        setStatus("");
      }, 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-black overflow-hidden px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-12 sm:pt-36 md:pt-10 lg:pt-10 pb-10 sm:pb-24 md:pb-20"
    >
      {/* glow effect */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10">
        {/* heading */}
        <div className="text-center mb-16">
          <p className="text-purple-400 uppercase tracking-[4px] text-sm">
            Get In Touch
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 text-white">
            Contact Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* left */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Let’s Build Something Amazing Together
            </h3>

            <p className="text-gray-400 leading-8">
              Open for Shopify development, custom app development,
              frontend engineering and exciting
              product building opportunities.
            </p>

            <div className="space-y-5">
              <div>
                <p className="text-purple-400">Email</p>
                <p className="text-gray-300">
                  bhattacharyajoyoti3@gmail.com
                </p>
              </div>

              <div>
                <p className="text-purple-400">Phone</p>
                <p className="text-gray-300">
                  +91 8697772264
                </p>
              </div>

              <div>
                <p className="text-purple-400">Location</p>
                <p className="text-gray-300">
                  Kolkata, India
                </p>
              </div>
            </div>
          </div>

          {/* right form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-purple-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-purple-500"
              />

              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-purple-500 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-4 rounded-xl border border-purple-500 hover:bg-purple-600 transition-all text-white"
              >
                Send Message
              </button>

              {/* status message */}
              {status && (
                <p
                  className={`text-sm text-center mt-3 ${
                    status.includes("successfully")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}