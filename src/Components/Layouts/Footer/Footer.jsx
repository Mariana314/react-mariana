import React from 'react'
import { Navbar } from "../Navbar/Navbar";
import { ItemNavbar } from "../../UI/ItemNavbar/ItemNavbar";
import { FaLinkedin , FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
    <footer className='text-1xl w-full bg-[#D9EAFD] mt-auto p-5'>
        <div className='flex items-center justify-center'>
            <p >Desarrollado por: &copy; <strong>MARIANA OCAMPO</strong></p>
            <Navbar>
                <ul className='flex space-x-3'>
                    <ItemNavbar contentItem={<FaLinkedin  />}/>
                    <ItemNavbar contentItem={<FaInstagram />}/>
                    <ItemNavbar contentItem={<FaWhatsapp />}/>
                    <ItemNavbar contentItem={<FaGithub />}/>
                     
                </ul>
            </Navbar>
        </div>
    </footer>
    </>
  )
}
