import React, { useState } from "react";
import "./style.scss"
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header() {
    const [openHeader, setOpenHeader] = useState(false)

    return (
        <>
            {!openHeader ?
                <div className="header-container-minimized">
                    <div className="header-content-minimized">
                        <div className="info-minimized" onClick={() => setOpenHeader(!openHeader)}>
                            <div className="info-row-minimized">
                                <p>Usuario Teste</p>
                            </div>
                            <div className="image-minimized">
                                <img src="https://www.ibiraiaras.rs.gov.br/wp-content/uploads/2023/02/sem-foto-homem.jpg"></img>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className="header-container">
                    <div className="header-content">
                        <div className="info-division">
                            <div className="info">
                                <div className="info-column">
                                    <div className="info-row">
                                        <p>Usuario:</p><h4>Usuario Teste</h4>
                                    </div>
                                    <div className="info-row">
                                        <p>Data de criação:</p><h4>20/08/2022</h4>
                                    </div>
                                    <div className="info-row">
                                        <p>Local:</p><h4>Clinica Teste</h4>
                                    </div>
                                    <div className="info-row">
                                        <p>Setor:</p><h4>Setor Teste</h4>
                                    </div>
                                </div>
                            </div>
                            <i onClick={() => setOpenHeader(!openHeader)} style={{fontSize: '25px', marginTop: '13vh', cursor: 'pointer'}} className="bi bi-chevron-double-up"></i>
                            <div className="image">
                                <img src="https://www.ibiraiaras.rs.gov.br/wp-content/uploads/2023/02/sem-foto-homem.jpg"></img>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}