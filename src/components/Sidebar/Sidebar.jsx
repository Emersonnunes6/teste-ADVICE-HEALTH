import React from "react";
import "./style.scss"
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";

export default function Sidebar(props) {
    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <div className="icon-box" onClick={() => props.handleClick('/')}>
                    <i style={{
                        color: 'black',
                        fontSize: '20px',
                        cursor: 'pointer'
                    }} className="bi bi-house-door-fill"></i>
                </div>

                <div className="icon-box" onClick={() => props.handleClick('/agendamento')}>
                    <i style={{
                        color: 'black',
                        fontSize: '20px',
                        cursor: 'pointer'
                    }} className="bi bi-calendar-event-fill"></i>
                </div>


                <div className="icon-box" onClick={() => props.handleClick('/consultas')}>
                    <i style={{
                        color: 'black',
                        fontSize: '20px',
                        cursor: 'pointer'
                    }} className="bi bi-list-ul"></i>
                </div>
            </div>
        </div>
    )
}