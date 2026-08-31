"use client";
import { useState } from "react";
import { toast, Toaster } from "sonner"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Do something with the data locally
    console.log("New message:", form);

    // 2. Show success message
    toast.success("Thanks! Your message has been received.");

    // 3. Clear the form
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputBase =
    "w-full bg-white rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:bg-gray-50 transition";

  return (
    <div className="container mx-auto">
    <div className="flex flex-col items-center py-16 px-4 mt-40">
      <h2 className="font-extrabold text-5xl text-gray-700 border-l-6 border-b-2 mb-10" id="contact">Contact</h2>
      <p>Get In Touch With Me</p>
      <div className="w-full max-w-xl">
        <Toaster richColors position="top-center"/>
        <form onSubmit={handleSubmit}   className="flex flex-col gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name here"
              required
              className={inputBase}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email here"
              required
              className={inputBase}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Project inquiry"
              required
              className={inputBase}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={6}
              required
              className= {inputBase}
            />
          </div>

          <button
            type="submit"
            className="bg-black hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg w-fit transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}
