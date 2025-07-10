import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getcode from './getcode.json'

export default function FcstList() {
    const [sparams] = useSearchParams();
    const gubun = sparams.get("gubun")
    const dt = sparams.get("dt")
    const area = sparams.get("area")
    const x = sparams.get("x")
    const y = sparams.get("y")
    //console.log(x) //파라미터들을 가져와서 정보에 맞게 패치하기

    const code = getcode.filter(item=>item['예보구분']==`${gubun}예보`)
    console.log(code)
    
    //데이터 패치하기
    const getFetchData = async()=>{

        let baseUrl; //gubun에 따라 baseURL 다름
        if (gubun=='초단기'){
            baseUrl = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
        }else{
            baseUrl = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?'
        }
        let url = `${baseUrl}serviceKey=${import.meta.env.VITE_DATA_API}&pageNo=1&numOfRows=1000&dataType=json`;
        url = `${url}&base_date=${dt.replaceAll('-','')}&base_time=${gubun=='초단기'?'0630':'0500'}`
        url = `${url}&nx=${x}&ny=${y}`
        
        //console.log(url) //url이 제대로 만들어졌는지 확인

        const resp = await fetch(url); 
        const data = await resp.json(); 
        console.log(data) //url 내부 데이터 전부
        setTdata(data.response.body.items.item); //필요한 데이터만 tdata에 업데이트 
        console.log(data.response.body.items.item);
    }

    useEffect(()=>{
        //console.log(gubun,dt,area,x,y)
        getFetchData();
    },[])




    return (
        <div>
            <div className="flex">
                <div className="font-bold text-2xl">
                    {area} {gubun} 예보 ({dt.replaceAll("-",'.')})
                </div>
                <select //ref = {areaRef}
                        className="bg-gray-50 border mx-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"> 
                        <option value=''>---항목선택---</option>
                        {
                            code.map(item=><option key = {item['항목값']} value = {item['항목값']}>{`${item['항목명']} [${item['항목값']}]`}</option>) //한번만 만들어지면 되니까 -> useState 쓸 필요 X
                        }
                </select >
            </div>
            <table>

            </table>
        </div>
  )
}
