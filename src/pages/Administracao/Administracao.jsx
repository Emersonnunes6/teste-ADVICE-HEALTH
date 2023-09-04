import React, { useState } from "react"
import "./styles.scss"

export default function Administracao(props) {
    const [consultasPendentes, setConsultasPendentes] = useState([])
    const [consultasRealizadas, setConsultasRealizadas] = useState([])
    const listaConsultas = JSON.parse(localStorage.getItem('agendamentos'))


    useState(() => {
        const consultasFiltradas = listaConsultas.filter((consulta) => consulta.status === 'Pendente')
        const consultasFiltradasRealizadas = listaConsultas.filter((consulta) => consulta.status === 'Realizado')
        setConsultasPendentes(consultasFiltradas)
        setConsultasRealizadas(consultasFiltradasRealizadas)
    }, [])

    return (
        <div className="adm-container">
            <div className='input-container'>
                <h1>Administração</h1>
            </div>
            <div className="adm-info-container">
                <div onClick={() => props.handleClick('/consultas')} className="numero-consultas">
                    <p>{consultasPendentes.length}</p>
                    <h2>Consultas Pendentes</h2>
                </div>
                <div onClick={() => props.handleClick('/consultas')} className="numero-consultas">
                    <p>{consultasRealizadas.length}</p>
                    <h2>Consultas Realizadas</h2>
                </div>
                <div onClick={() => props.handleClick('/agendamento')} className="agendamento">
                    <i class="bi bi-alarm-fill"></i>
                    <h2>Agendar Consulta</h2>
                </div>
            </div>
        </div>
    )
}