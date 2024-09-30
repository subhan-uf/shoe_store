import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <main>
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold">
            Contact Us
          </div>
          <div className="text-md md:text-xl mb-5">
            We'd love to hear from you! Whether you have questions, feedback, or
            just want to chat about sneakers, our team is here to help. Reach
            out to us and we'll get back to you as soon as possible.
          </div>
          {isSubmitted ? (
            <div className="text-md md:text-xl text-center mt-5">
              Submitted! Thank you for reaching out.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="text-left">
              <div className="mb-4">
                <label className="block text-md md:text-xl font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-md md:text-xl font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-md md:text-xl font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="5"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </Wrapper>
    </main>
  );
}
