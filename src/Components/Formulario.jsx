import { useState } from 'react'
import Enviado from './Enviado'

const Formulario = () => {
    const [usuario, setUsuario] = useState({
        nombreDueño: '', 
        nombreMascota: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(usuario.nombreDueño.length > 2 && usuario.nombreMascota.length > 5){
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }
    console.log(usuario)
  return (
    <div>
        {!show && 
            <form onSubmit={handleSubmit}>
                <label >Nombre Dueño</label>
                <input type="text" value={usuario.nombreDueño} onChange={(event) => setUsuario({...usuario, nombreDueño: event.target.value.trimStart()})}/>
                <label >Nombre Mascota</label>
                <input type="text" value={usuario.nombreMascota} onChange={(event) => setUsuario({...usuario, nombreMascota: event.target.value.trimStart()})}/>
                <button>Enviar</button>
            </form>
        }
        {show ? 
            <Enviado nombreDueño={usuario.nombreDueño} nombreMascota={usuario.nombreMascota}/>
        :
            null
        }
        {error && <h5 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h5>}

    </div>
  )
}

export default Formulario