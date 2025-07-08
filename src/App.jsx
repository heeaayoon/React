import './App.css'
import reactlogo from './assets/react.svg'
import vitelogo from '/vite.svg'
import GroupText from './01/GroupText'
import MyClock from './02/MyClock'
import MyDiv from './03/MyDiv'
import MyListItem from './04/MyListItem'
import MyList from './04/MyList'
import Count from './04-1/Count'
import Lotto from './05/Lotto'
import NewLotto from './05/NewLotto'
import FoodMain from './06/FoodMain'
import FoodMain2 from './07/FoodMain'
import FoodMain3 from './06-1/FoodMain'
import FoodMain4 from './07-1/FoodMain'
import MyToggle from './08/MyToggle'
import MyEffect from './09/MyEffect'
import BoxOffice from './10/BoxOffice'
import Traffic from './11/Traffic'
import MyRef from './12/MyRef'


function App() {
  return(
    <div className = "w-full xl:w-8/10 h-screen mx-auto flex flex-col justify-start items-start">
      <header className = "w-full min-h-20 bg-indigo-300
                          flex justify-between items-center">
            <div className="flex ml-10">
                <img src={reactlogo} alt = "react"/>+
                <img src='/vite.svg' alt = "vite"/>
            </div>
      </header>
      <main className="w-full flex-grow
                        overflow-y-auto py-10
                       flex flex-col items-center"> 
            <MyRef/>
      </main>
      <footer className = "w-full min-h-20
                          bg-black text-white
                          flex justify-center items-center">
            K-digital 2025 2기 Front-end
      </footer>
    </div>
  )
}

export default App
