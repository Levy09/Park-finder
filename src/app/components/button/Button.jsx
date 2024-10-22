"use client"; // Indica que este é um componente do cliente

import React from 'react'; // Importando React

// Definindo o componente AdicionarVaga
export default function Button({onClick}) {
    return (
        <div className="flex flex-col items-center justify-center min-h-full px-5 py-10">
           <div></div>
            <button onClick={onClick}
  className="flex items-center bg-blue-500 text-white rounded-lg p-4 hover:bg-blue-900 transition"
            >
                <span className="text-1xl mr-2">➕</span> 
                Adicionar Vaga
            </button>
        </div>
    )

};

   






