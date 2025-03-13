import React from "react";
import Hi from "../../../assets/Images/Hi.png";

export const Experience = () => {
  return (
    <div className="flex flex-col md:flex-row lg:mt-30 md:mt-20 items-center lg:justify-center gap-10 p-8">

      <div className="flex justify-center w-full md:w-1/3">
        <img
          className="w-44 md:w-52 lg:w-60 border-4 border-emerald-600 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          src={Hi}
          alt="Hi"
        />
      </div>

      <div className="w-full md:w-2/3 space-y-4 max-w-xl">

        <div className="p-5 border-l-4 border-emerald-600 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800 mb-1 text-center md:text-left">📌 Nivel de Inglés</h2>
          <p className="font-semibold text-gray-800 text-center md:text-left">B1 - Intermedio</p>
          <p className="mt-2 text-gray-700">
            Tengo un nivel de inglés intermedio (B1), lo que me permite comprender conversaciones claras
            en temas cotidianos y técnicos, expresarme de forma sencilla pero efectiva, leer textos básicos
            y redactar correos o descripciones sobre temas que domino.
          </p>
        </div>

        <div className="p-5 border-l-4 border-emerald-600 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800 mb-1 text-center md:text-left">🎓 Estudios</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Bachiller</strong> – Institución Educativa Ciudad Dorada (2023)</li>
            <li><strong>Técnico en Programación de Software</strong> – SENA (2023)</li>
            <li><strong>Tecnólogo en Análisis y Desarrollo de Software</strong> – SENA (Actualidad)</li>
          </ul>
        </div>

      </div>

    </div>
  )
}
