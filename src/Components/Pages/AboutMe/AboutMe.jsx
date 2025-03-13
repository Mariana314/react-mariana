import React from 'react';

export const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row lg:mt-40 md:mt-40 gap-6 lg:gap-12 p-6">
     
      <div className="w-full md:w-1/2 p-6 border-l-4 border-emerald-600 bg-white rounded-lg shadow-xl transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-110">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center md:text-left"> 🛠 Habilidades Técnicas</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Frontend:</strong> React, HTML, CSS, JavaScript, Java, Tailwind CSS</li>
          <li><strong>Control de Versiones:</strong> Git, GitHub</li>
          <li><strong>Educación y Liderazgo:</strong> Lógica de programación, preparación</li>
          <li><strong>Desarrollo Web:</strong> Aplicaciones del lado del cliente</li>
        </ul>
      </div>

      <div className="w-full md:w-1/2 p-6 border-l-4 border-emerald-600 bg-white rounded-lg shadow-xl transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-110">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center md:text-left"> 🤝 Habilidades Sociales</h2>
        <ul className="space-y-2 text-gray-700">
          <li>Comunicación efectiva</li>
          <li>Honestidad</li>
          <li>Respeto</li>
          <li>Trabajo en equipo</li>
          <li>Adaptabilidad</li>
          <li>Resolución de problemas</li>
        </ul>
      </div>

    </div>
  )
}
