import { Link } from "react-router-dom"

export default function RouteHome() {
  return (
    <div className='w-9/10 flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold text-center'>RouteHome</h1>
        <ul className='w-60 text-center'>
            <Link to='/p1/사과/🍎'>
            <li className='w-full p-4 m-2 border border-indigo-300 hover:bg-indigo-200'>사과 🍎</li>
            </Link>
            <Link to='/p1/당근/🥕'>
            <li className='w-full p-4 m-2 border border-indigo-300 hover:bg-indigo-200'>당근 🥕</li>
            </Link>
            <Link to='/p1/바나나/🍌'>
            <li className='w-full p-4 m-2 border border-indigo-300 hover:bg-indigo-200'>바나나 🍌</li>
            </Link>
        </ul>
    </div>
  )
}
