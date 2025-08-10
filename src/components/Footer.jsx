import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        <div>
          <h3 className="text-xl font-bold mb-2">FoodLoop</h3>
          <p className="text-sm text-gray-300">
            Share your extra meals with people who need them. Together, we can reduce waste and fight hunger in our community.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">About</h4>
          <ul className="space-y-1 text-gray-300">
            <li>
              <a href="/#mission" className="hover:text-white">
                Our Mission
              </a>
            </li>
            <li>
              <a href="/#AboutSection" className="hover:text-white">
                Why FoodLoop
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="/available-foods" className="hover:text-white">Available Foods</a></li>
            <li><a href="/add-food" className="hover:text-white">Add Food</a></li>
            <li><a href="/my-requests" className="hover:text-white">My Requests</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center text-center">
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center space-x-4 text-xl text-gray-300">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaFacebook /></a>
            <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaTwitter /></a>
            <a href="https://www.linkedin.com/home" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedin /></a>
            <a href="https://github.com/20101591" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} FoodLoop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
