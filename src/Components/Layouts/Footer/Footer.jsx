import React from 'react'
import { Navbar } from "../Navbar/Navbar";
import { ItemNavbar } from "../../UI/ItemNavbar/ItemNavbar";
import { SocialLinks } from "../../UI/SocialLinks/SocialLinks";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
    <footer className='text-1xl w-full bg-[#D9EAFD] mt-auto p-2'>
        <div className='flex items-center justify-center'>
            <p >Desarrollado por: &copy; <strong>MARIANA OCAMPO</strong></p>
            <Navbar>
              < SocialLinks/>
            </Navbar>
        </div>
    </footer>
    </>
  )
}
