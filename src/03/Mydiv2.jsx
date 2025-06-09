import MyDiv3 from "./MyDiv3"
export default function Mydiv2() {
  return (
    <div className="w-9/10 h-4/5 bg-amber-600 text-zinc-50 font-bold
                    p-10 text-2xl
                    flex flex-col items-center">
      <div className="w-9/10 flex justify-start mb-5">
       Mydiv2
      </div>
      <MyDiv3/>
    </div>
  )
}
