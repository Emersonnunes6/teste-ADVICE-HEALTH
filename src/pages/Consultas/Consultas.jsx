import React, { useEffect, useState } from 'react';
import { DataGrid, GridActionsCellItem, GridRowModes } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import "./style.scss"
import moment from 'moment';
import clsx from 'clsx';

export default function Consultas() {
    const [rowModesModel, setRowModesModel] = useState({});
    const [valueSearch, setValueSearch] = useState('');

    const columns = [
        { field: 'Paciente', headerName: 'Paciente', width: 400, editable: true },
        { field: 'Exame', headerName: 'Exame', width: 300 },
        { field: 'startDate', headerName: 'Data da consulta', width: 200, type: 'date', valueFormatter: params => new Date(params?.value).toLocaleString() },
        { field: 'Convenio', headerName: 'Convênio', width: 300 },
        {
            field: 'status', headerName: 'Status', width: 300, cellClassName: (params) => {
                if (params.value == null) {
                    return '';
                }

                return clsx('super-app', {
                    negative: params.value === "Realizado",
                    positive: params.value === "Pendente",
                });
            },
        },
    ];

    const [list, setList] = useState(JSON.parse(localStorage.getItem('agendamentos')))

    useEffect(() => {
        list.map((consulta) => {
            var strData = consulta.startDate;
            var data = strData.split("T");
            var partesData = data[0].split("-");
            var dataConsulta = new Date(partesData[0], partesData[1] - 1, partesData[2]);
            var hoje = new Date()

            if (moment(hoje).isAfter(dataConsulta)) {
                consulta.status = 'Realizado'
            } else {
                consulta.status = 'Pendente'
            }
        })
        localStorage.setItem("agendamentos", JSON.stringify(list))
    }, [])

    const searchByPacient = (value) => {
        setList(list.filter((el) => el.Paciente.toLowerCase().includes(value.toLowerCase())))
        setValueSearch(value)
    }

    useEffect(() => {
        if (valueSearch === '') {
            setList(JSON.parse(localStorage.getItem('agendamentos')))
        }
    }, [valueSearch])

    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        setList(list.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };



    return (
        <div className='consultas-container'>
            <div className='consultas-content'>
                <Box sx={{
                    height: '100%', maxWidth: '100vw', '& .super-app-theme--cell': {
                        backgroundColor: 'rgba(224, 183, 60, 0.55)',
                        color: '#1a3e72',
                        fontWeight: '600',
                    },
                    '& .super-app.negative': {
                        backgroundColor: 'rgba(157, 255, 118, 0.49)',
                        color: '#1a3e72',
                        fontWeight: '600',
                    },
                    '& .super-app.positive': {
                        backgroundColor: '#d47483',
                        color: '#1a3e72',
                        fontWeight: '600',
                    },
                }}>
                    <div className='input-container'>
                        <h1>Consultas</h1>
                        <input className='search-input' onChange={(e) => searchByPacient(e.target.value)} placeholder='Pesquisar por nome do paciente...'></input>
                    </div>
                    <DataGrid
                        checkboxSelection
                        rows={list}
                        columns={columns}
                        pageSizeOptions={[3]}
                        editMode="row"
                        rowModesModel={rowModesModel}
                        onRowModesModelChange={handleRowModesModelChange}
                        processRowUpdate={processRowUpdate}
                        disableRowSelectionOnClick
                    />
                </Box>
            </div>
        </div>
    );
}