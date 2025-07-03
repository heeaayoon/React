import TailButtonLine from "../component/TailButtonLine"
import { useState } from "react";

export default function MyToggleBox({setcolor}) {
    const bg = {
        "blue" : "bg-blue-100 hover:text-black",
        "orange" : "bg-orange-100"
    }

    const [Flag, setFlag] = useState(false); 
    const handleToggle = () =>{ 
        console.log(color)
        setFlag(!Flag); //클릭시 플래그를 바꿈
    }
    
    return (
        <div className={`w-8/10 p-0.5
                        flex flex-col justify-center items-center
                         border-zinc-400 border-3 rounded-2xl
                        ${bg[setcolor]}`}> 
            <div className="font-bold bg-gray-200 flex justify-center m-5">
                {setcolor}
            </div>
            <TailButtonLine caption = "blue Togggle" 
                            color= {setcolor}
                            onHandle={handleToggle}/> 
        </div>
  )
}
