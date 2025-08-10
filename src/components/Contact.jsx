import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-green-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          Have questions or want to collaborate? Reach out to us!
        </p>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-lg"
          ></textarea>
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
