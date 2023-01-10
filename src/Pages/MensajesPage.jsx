import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from '../components/Table/Table'

const MensajesPage = () => {
  
  const [mensajes, setMensajes] = useState([])
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
      Header: "Mensaje",
      accessor: "mensaje"
    },
    {
      Header: "Visible",
      accessor: d => d.visible ? 'SI' : 'NO'
    }
  ]


  useEffect(()=>{
    
    setLoading(true)
    axios.get('http://127.0.0.1:8000/fiesta/mensajes/list/')
         .then(res => {
          if(res.data.success){
            setMensajes(res.data.data)
          }})
         .catch(err => {
            console.log(err)
         })
         .finally(
           setLoading(false)
         )
  },[])

  return (
    <div className="w-full">
    {loading 
    ? 
    (<h1>Esperando respuesta</h1>)
    :
    <Table columns={columns} data={mensajes} />
    }
    </div>
  )
}

export default MensajesPage
