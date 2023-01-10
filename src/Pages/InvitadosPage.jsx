import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from '../components/Table/Table'

const InvitadosPage = () => {
  
  const [invitados, setInvitados] = useState([])
  const [loading, setLoading] = useState(false)
  
  const columns = [
    // {
    //   Header: "id",
    //   accessor: "id",
    // },
    {
      Header: "Nombre",
      accessor: "nombre",
    },
    {
      Header: "Apellido",
      accessor: "apellido"
    },
    {
      Header: "Asiste",
      accessor: d => d.asiste ? "SI" : "NO",
    },
    {
      Header: "Cantidad",
      accessor: "cantidad"
    },
    {
      Header: "Menú Especial",
      accessor: d => d.menu_especial ? d.menu_especial : "No",
    },
    {
      Header: "Canción",
      accessor: d => d.cancion > 0 ? d.cancion : "No",
    }
  ]
  
  useEffect(()=>{

    setLoading(true)
    
    axios.get('http://127.0.0.1:8000/invitados/invitados/list/')
    .then(res => {
      if(res.data.success){
        setInvitados(res.data.data)
      }})
    .catch(err => {
        console.log(err)
    })
    .finally(
      setLoading(false)
    )

  },[])
  
  return (
    <>
      {loading 
      ? 
      (<h1>Esperando respuesta</h1>)
      :
      <Table columns={columns} data={invitados} />
      }
    </>
  )
}

export default InvitadosPage