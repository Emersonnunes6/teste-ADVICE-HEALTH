import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Administracao from './pages/Administracao/Administracao';
import Agendamento from './pages/Agendamento/Agendamento';
import Consultas from './pages/Consultas/Consultas';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <div className='main'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Administracao />} />
            <Route path="/agendamento" element={<Agendamento />} />
            <Route path="/consultas" element={<Consultas />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
