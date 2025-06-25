import TailBall from "../component/TailBall"
import TailButton from "../component/TailButton"

export default function Lotto() {
  const handleClick = () =>{
    console.log("check")
  }

  return (
    <div>
        <TailBall n="15" />
        <TailButton caption = "로또 번호 생성" 
                    color = "orange" 
                    onHandle = {handleClick}/>
    </div>
  )
}
