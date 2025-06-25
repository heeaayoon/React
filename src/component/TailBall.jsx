export default function TailBall({n}) {
    const bg=[ 
        "bg-red-400", "bg-amber-200", "bg-Lime-300", "bg-sky-300",  "bg-Violet-300"];

  return (
    <div className={`w-20 h-20 rounded-full
                    flex justify-center items-center
                    text-2xl font-bold
                    ${bg[Math.floor(n/10)]}`}>
      {n}
    </div>
  )
}
