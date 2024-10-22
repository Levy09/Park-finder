
import { CarSimple, LetterCircleP } from "@phosphor-icons/react/dist/ssr"



export default function CardStatus() {
    return (
        <div className="p-4  gap-5 h-36 w-56 bg-blue-950 rounded-2xl flex flex-col justify-between   text-white ">
            <div className="  flex min-w-full items-center">
                <div className="flex-1 flex justify-start font-bold ">
                  N° 001
                </div>
                <div className="flex1 ">
    <div className="h-4 w-4 bg-green-500 rounded-full"></div>
    
</div>
             
            </div>
            <div className=" gap-2 flex-1 flex justify-center items-center">
               <CarSimple size={32} />
               <p className="font-black text-xl">SVD2010</p>
                </div>
              <div className=" gap-4 flex justify-center">
                E:<strong>00:00:00</strong>   S:<strong>00:00:00</strong>
              </div>
        </div>

    )

}


