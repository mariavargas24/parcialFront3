import React from 'react'

const Enviado = ({nombreDueño, nombreMascota}) => {
  return (
    <div>
        <h3>Perfecto, {nombreDueño}!</h3>
        <h4>Ya estamos validando la info de tu peludito {nombreMascota}💖</h4>
    </div>
  )
}

export default Enviado