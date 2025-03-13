import React from "react";
import Me from "../../../assets/Images/Me.png";

export const Main = () => {
  return (
    <div className="flex flex-col md:flex-row lg:mt-20 md:mt-20 items-center gap-10 lg:gap-16 p-8 lg:p-12">

      <div className="p-5 border-l-4 border-emerald-600 bg-white rounded-md flex justify-center shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl">
        <img 
          className="w-48 md:w-56 lg:w-64"
          src={Me}
          alt="Mariana Ocampo"
          aria-label="Imagen de Mariana Ocampo"
        />
      </div>

      <div className="p-5 border-l-4 border-emerald-600 bg-white rounded-md shadow-lg max-w-md lg:max-w-2xl transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          📌 Analista y desarrolladora de software</h1>
        <p className="text-gray-800 mt-2">
          Analista y Desarrolladora de Software en formación, enfocada en el desarrollo frontend y con interés en backend. 
          Apasionada por la tecnología, el aprendizaje continuo y el crecimiento profesional.
        </p>
      </div>

    </div>
  )
}
