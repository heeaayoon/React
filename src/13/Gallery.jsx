import { useState, useEffect, useRef } from "react";
import TailSearch from "../component/TailSearch";
import TailCard from "../component/TailCard"

export default function Gallery() {

    const kwRef = useRef();

    const handleSearch = (e) =>{
        e.preventDefault();
        //kwRef.current.focus();
        console.log(kwRef.current.value);
    }
    const handleReset = (e) =>{
        e.preventDefault();
    }

    // //패치 데이터를 저장할 state 변수
    // const [tdata, setTdata] = useState([]);

    // //데이터 패치 함수
    // const getFetchData=async()=>{
    //     const baseUrl = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?';
    //     const keyWord = '%ED%83%9C%EC%A2%85%EB%8C%80' ;
    //     const url = `${baseUrl}serviceKey=${import.meta.env.VITE_DATA_API}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${keyWord}&_type=json`;
    //     //console.log(url) //url이 제대로 만들어졌는지 확인작업 필요

    //     const resp = await fetch(url); 
    //     const data = await resp.json(); 
    //     //console.log(data) //url 내부 데이터 전부
    //     setTdata(data.response.body.items.item); //필요한 데이터만 tdata에 업데이트
    //     console.log(data.response.body.items.item);
    // }

    // //컴포넌트 생성이 될 때, 처음 한 번 실행(데이터패치 시키기) by useEffect 훅
    // useEffect(()=>{
    //     //데이터 패치 함수를 호출
    //     getFetchData()
    // },[])
    
  return (
    <div>
        <div className="font-bold">관광사진 갤러리</div>
        <TailSearch TailRef = {kwRef} 
                    onSearch = {handleSearch} 
                    onReset = {handleReset}/>
        <div className="grid grid-cols-1">
            <TailCard imgUrl = "http://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg"
                      title = "태종대유원지"
                      addre = "부산광역시 영도구 동삼동"
                      searchKeyword = "태종사"/>

        </div>
    </div>
  )
}
