import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { ItemNavbar } from "../../UI/ItemNavbar/ItemNavbar";

export const Header = () => {
  return (
    <header className="w-full flex justify-between p4 list-none font-[Playfair Display] italic font-bold ">
        
    <h1 className="mt-2 text-4xl font-bold m-4 ">MARIANA OCAMPO MEDINA</h1>
      <Navbar>
        <ul className='flex space-x-2 mt-2 m-4 font-bold'> 
          <ItemNavbar route='/' contentItem='INICIO'/>
          <ItemNavbar route='/AboutMe' contentItem='SOBRE MI'/>
        </ul>
      </Navbar>
  </header>
  
  )
}
