import { useEffect, useState } from "react"
import TailButton from "../component/TailButton";

export default function MyEffect() {
    const[cnt, setCnt] = useState(0);
    const handleUp = () =>{
        setCnt(cnt+1) 
        console.log("HandleUp", cnt) //setCnt로 cnt를 바꾸기 전에 console에 찍힘
    }

    const handleDown = () =>{
        setCnt(cnt-1)
        console.log("HandleDown", cnt)
    }


  return (
    <div className="text-4xl font-bold">
        MyEffect cnt : {cnt}
        <TailButton caption = "＋" color = "orange" onHandle={handleUp}/>
        <TailButton caption = "－" color = "blue" onHandle={handleDown}/>
    </div>
  )
}
