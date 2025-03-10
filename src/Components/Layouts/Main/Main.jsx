import React from 'react'
import Me from "../../../assets/Images/Me.png";

export const Main = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-10 p-8'>

      <div className="p-5 border-l-4 border-cyan-500 bg-white rounded-md shadow-lg flex justify-center">
        <img className="w-48 md:w-56 lg:w-64 rounded-lg" src={Me} alt="Mariana Ocampo" />
      </div>

      <div className="p-5 border-l-4 border-blue-500 bg-white rounded-md shadow-lg max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800">📌 Analista y desarrolladora de software</h1>
        <p className="text-gray-700 mt-2">
          Analista y Desarrolladora de Software en formación, enfocada en el desarrollo frontend y con interés en backend. 
          Apasionada por la tecnología, el aprendizaje continuo y el crecimiento profesional.
        </p>
      </div>

    </div>
  )
}
