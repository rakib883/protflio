
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Foter from './Components/Foter/Foter'


function App() {
  return (
    <div className="main-content overflow-hidden">
        <Header></Header>
        <Outlet></Outlet>
        <Foter></Foter>
    </div>
  )
}

export default App
