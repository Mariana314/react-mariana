import React from 'react';

export const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
     
      <div className="flex-1 p-6 border-l-4 border-blue-500 bg-white shadow-lg rounded-xl ">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Habilidades Técnicas</h2>
        <ul className="space-y-2">
          <li><strong>Frontend:</strong> React, HTML, CSS, JavaScript, Tailwind CSS</li>
          <li><strong>Control de Versiones:</strong> Git, GitHub</li>
          <li><strong>Educación y Liderazgo:</strong> Lógica de programación, preparación y conducción de conferencias</li>
          <li><strong>Desarrollo Web:</strong> Aplicaciones del lado del cliente, consumo de APIs</li>
        </ul>
      </div>

     
      <div className="flex-1 p-6 border-l-4 border-green-500 bg-white shadow-lg rounded-xl ">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Habilidades Sociales</h2>
        <ul className="space-y-2">
          <li>Comunicación efectiva</li>
          <li>Liderazgo</li>
          <li>Honestidad</li>
          <li>Respeto</li>
          <li>Trabajo en equipo</li>
          <li>Adaptabilidad</li>
          <li>Resolución de problemas</li>
        </ul>
      </div>
    </div>
  );
}
