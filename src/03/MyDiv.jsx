import Mydiv2 from "./Mydiv2"
export default function MyDiv() {
  return (
    <div className="w-2/3 h-3/5 bg-amber-900 text-zinc-50 font-bold
                    p-10 text-2xl
                    flex flex-col items-center">
      <div className="w-9/10 flex justify-start mb-5">
        Mydiv
      </div>
      <Mydiv2/>
    </div>
  )
}
