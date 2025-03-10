import React from 'react'
import { Navbar } from "../Navbar/Navbar";
import { ItemNavbar } from "../../UI/ItemNavbar/ItemNavbar";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
    <footer className='text-1xl'>
        <div className='flex items-center justify-center'>
            <p >Desarrollado por: &copy; <strong>MARIANA OCAMPO</strong></p>
            <Navbar>
                <ul className='flex space-x-3'>
                    <ItemNavbar contentItem={<FaFacebook />}/>
                    <ItemNavbar contentItem={<FaInstagram />}/>
                    <ItemNavbar contentItem={<FaWhatsapp />}/>
                </ul>
            </Navbar>
        </div>
    </footer>
    </>
  )
}
