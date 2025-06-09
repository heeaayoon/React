export default function MyListItem() {
    const Url = "./img/html.png";
    const title = "html";
    const content = "HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용";
  return (
    <div className="w-1/2 h-50
                    flex justify-start items-start
                    border-gray-400">
      <div className="w-1/4 h-full
                      flex items-center justify-start
                      bg-red-300">
            <img src={Url}/>            
      </div>
      <div className="w-3/4 h-full
                      flex flex-col 
                      items-center justify-between p-5
                      bg-green-300">
            <div className="w-full flex flex-col justify-start items-start">
                <h1 className="font-bold">{title}</h1>
                <p className="w-full flex flex-col justify-start items-start bg-amber-50">{content}</p>
            </div>
            <div className="w-full h-4 
                            flex justify-end items-center">
                좋아요
            </div>
      </div>
    </div>
  )
}
