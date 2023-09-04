import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Administracao from './pages/Administracao/Administracao';
import Agendamento from './pages/Agendamento/Agendamento';
import Consultas from './pages/Consultas/Consultas';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()


  const handleClick = (route) => {
    navigate(route)
  }

  return (
    <>
      <Sidebar handleClick={handleClick} />
      <div className='main'>
        <Header />
          <Routes>
            <Route path="/" element={<Administracao handleClick={handleClick} />} />
            <Route path="/agendamento" element={<Agendamento />} />
            <Route path="/consultas" element={<Consultas />} />
          </Routes>
      </div>
    </>
  )
}

export default App
