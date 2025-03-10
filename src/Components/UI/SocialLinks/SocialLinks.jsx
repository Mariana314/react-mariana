import React from "react";
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <ul className="flex space-x-3 p-3">
      <li>
        <a href="https://www.instagram.com/mariana.o314?igsh=MWVyZzVmNmM4aTU4" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl hover:text-pink-500" />
        </a>
      </li>
      <li>
        <a href="https://wa.me/573225431071" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-2xl hover:text-green-500" />
        </a>
      </li>
      <li>
        <a href="https://github.com/Mariana314" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-800" />
        </a>
      </li>
    </ul>
  );
};
