import { useState, useEffect } from "react"

export default function BoxOffice() {

    const [tdata, setTdata] = useState([]);
    const [tag, setTag] = useState([]);

    const getFetchData = async () =>{
        const apikey = import.meta.env.VITE_MV_API;
        //console.log("apikey", apikey)
        const dt = "20250702";
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${dt}`;
    
        //fetch -> async~await 구문 사용
        const resp = await fetch(url);
        const data = await resp.json();
        setTdata(data.boxOfficeResult.dailyBoxOfficeList);
        console.log(data.boxOfficeResult.dailyBoxOfficeList);

        //기존 fetch 방법
        //  fetch(url)
        // .then(resp => resp.json())
        // .then(data => console.log(data.boxOfficeResult.dailyBoxOfficeList))
        // .catch(err => console.log(err))
    }
    
    //일단은 처음 생성될 때, 패치된 데이터를 가져오기
    useEffect(()=>{
        getFetchData();
    },[])

    //tDdata가 변경되면, 패치된 데이터를 가져오기 
    useEffect(()=>{
        let tm = tdata.map(item =>(
            <tr className= "bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                key = {item.movieCd}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.rank}
                </th>
                <td className="px-6 py-4">
                    {item.movieNm}
                </td>
                <td className="px-6 py-4">
                    {item.openDt}
                </td>
                <td className="px-6 py-4">
                    {item.rankInten}
                </td>
            </tr>
        ));
        setTag(tm)
    },[tdata]) //10개의 tdata배열이 생김 -> setTag에 <tr> 태그 넣기


  return (
    <div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        순위    
                    </th>
                    <th scope="col" className="px-6 py-3">
                        영화이름
                    </th>
                    <th scope="col" className="px-6 py-3">
                        개봉일자    
                    </th>
                    <th scope="col" className="px-6 py-3">
                        순위변동
                    </th>
                </tr>
            </thead>
                <tbody>
                    {tag}
                </tbody>
        </table>
    </div>
  )
}