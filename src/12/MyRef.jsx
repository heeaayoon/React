import TailButton from "../component/TailButton"
import { useState, useRef } from "react";

export default function MyRef() {

    const handleCalc =()=>{

    }

  return (
    <div className="w-9/10 bg-indigo-200 flex justify-center items-center h-20">
        <form className="flex justify-center">
            <input type = "number" name = "n1" 
                    className="mx-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            <select name="op" defaultValue="x"
                    className ="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
                <option value="+"> + </option>
                <option value="-"> - </option>
                <option value="x"> x </option>
                <option value="/"> / </option>
            </select>
            <input type = "number" name = "n2" 
                    className="mx-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            <TailButton caption = "=" 
                        color = "blue"
                        onHandle= {handleCalc}
                        />
            <input type = "number" name = "n2" readOnly
                    className="mx-4 bg-blue-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </form>
    </div>
  )
}
