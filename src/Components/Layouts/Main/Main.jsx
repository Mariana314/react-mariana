import React from 'react'
import Image from "../../../assets/Images/Image3.png";

export const Main = () => {
  return (
    <>
    <div className='flex justify-between items-center gap-10'>

      <img className='w-48 md:w-56 lg:w-64' src= { Image } alt="" />

      <div className='flex w-1/2'>
        <div className="max-w-md ">
          <h1 className="text-2xl font-semibold">Analista y desarrolladora de software</h1>
          <p className="text-gray-700">
            Analista y Desarrolladora de Software en formación, enfocada en el desarrollo frontend y con interés en backend. Apasionada por la tecnología, el aprendizaje continuo y el crecimiento profesional.
          </p>
        </div>

      </div>
    </div>
      

    </>
  )
}
