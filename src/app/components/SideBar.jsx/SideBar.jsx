"use client"
import { usePathname, useRouter } from 'next/navigation'

import { Car, LetterCircleP } from "@phosphor-icons/react/dist/ssr"

export default function SideBar() {
    const pathname = usePathname()
    const router= useRouter()
    function goToPage(page){
            router.push(page)
    }
    console.info(pathname)

    return (
        <div className="absolute left-0  min-h-screen min-w-24 p-2 flex justify-start items-center bg-blue-500
         text-white flex-col space-y-2">

                <div  onClick={()=> goToPage("/Dashboard")} className={pathname === "/Dashboard" ? "bg-green-600 p-2 rounded-md" : "cursor-pointer"}>
                    <Car size={32} />
                </div>

                <div onClick={()=> goToPage("/park")}  className={pathname === "/park" ? "bg-green-600 p-2 rounded-md" : "cursor-pointer"}>
                    <LetterCircleP size={32} />
                </div>

        </div>
    )
}