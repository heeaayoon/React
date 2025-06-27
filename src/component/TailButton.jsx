export default function TailButton({caption, color, onHandle}) {
  const bg = {
    "blue" : "bg-blue-400",
    "orange" : "bg-orange-400",
    "lime" : "bg-lime-400"
  }

  const bghover = {
    "blue" : "bg-blue-200",
    "orange" : "bg-orange-200",
    "lime" : "bg-lime-200"
  }

  return (
    <div>
      <button className={`p-3 rounded-xl
                       text-white
                        hover:cursor-pointer
                        hover:font-bold
                        mx-2 
                        ${bghover[color]}
                        ${bg[color]}`}
              onClick={onHandle}>
        {caption}
      </button>
    </div>
  )
}
