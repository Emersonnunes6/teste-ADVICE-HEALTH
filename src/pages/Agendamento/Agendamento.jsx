
import React, { useEffect, useState } from "react"
import Demo from '../../components/Agenda/Agenda';

export default function Agendamento() {
    const [agendamentos, setAgendamentos] = useState([])

    useEffect(() => {
        if (localStorage.getItem('agendamentos') !== '[]') {
            setAgendamentos(JSON.parse(localStorage.getItem('agendamentos')))
        }
    }, [agendamentos])

    return (
        <div className='agendamento-container'>
            <div className="agendamento-content">
                <div className='input-container'>
                    <h1>Agendamento</h1>
                </div>
                <Demo agendamentos={agendamentos} setAgendamentos={setAgendamentos} />
            </div>
        </div>
    )
}