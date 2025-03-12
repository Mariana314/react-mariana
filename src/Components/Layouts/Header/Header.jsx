import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ItemNavbar } from "../../UI/ItemNavbar/ItemNavbar";

export const Header = () => {
  return (
    <header className="w-full flex flex-col md:flex-row items-center md:justify-between bg-emerald-600 text-white font-[Playfair Display] italic font-bold p-4">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-0">
        MARIANA OCAMPO MEDINA
      </h1>

      <Navbar>
        <ul className="flex flex-col md:flex-row md:space-x-4 text-lg text-center">
          <ItemNavbar
            route="/"
            contentItem="INICIO"
            activeColorClass="text-emerald-400"
            hoverColorClass="hover:text-emerald-300"
          />
          <ItemNavbar
            route="/AboutMe"
            contentItem="SOBRE MI"
            activeColorClass="text-emerald-400"
            hoverColorClass="hover:text-emerald-300"
          />
          <ItemNavbar
            route="/Experience"
            contentItem="EXPERIENCIA"
            activeColorClass="text-emerald-400"
            hoverColorClass="hover:text-emerald-400"
          />
        </ul>
      </Navbar>
    </header>
  )
}
