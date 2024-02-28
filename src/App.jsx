
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Foter from './Components/Foter/Foter'
import Mainfoter from './Components/Maninfoter/Mainfoter'


function App() {
  
  return (
    <div  className="main-content">
        <Header></Header>
        <Outlet></Outlet>
        <Mainfoter></Mainfoter>
    </div>
  )
}

export default App
