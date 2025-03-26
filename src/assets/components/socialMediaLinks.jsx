import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} className="text-blue-600" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} className="text-pink-500" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} className="text-blue-400" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={30} className="text-red-600" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
