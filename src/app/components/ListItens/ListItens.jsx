"use client"; // Indica que este é um componente do cliente

import React from 'react'; // Importando React
import { Trash, LetterCircleP } from "@phosphor-icons/react/dist/ssr"

export default function ListItens({numeracao}){

    return  (
        <div className="flex w-full justify-between bg-gray-200 rounded-xl p-4">
<div>{numeracao}</div>
<Trash  size={32} />     
</div>

    )

}
