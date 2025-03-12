import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { SocialLinks } from "../../UI/SocialLinks/SocialLinks";

export const Footer = () => {
  return (
    <footer className="w-full bg-emerald-600 text-white p-4 mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-2 md:gap-4">
        
        <p className="text-lg font-semibold">
          Desarrollado por: &copy; <strong>MARIANA OCAMPO</strong>
        </p>

        <Navbar>
          <SocialLinks />
        </Navbar>

      </div>
    </footer>
  )
}
