import React from 'react'

const Card = (usuario) => {
  return (
    <div className='card'>
    <h2>{usuario.nombreDueño}</h2>
    <h2>{usuario.nombreMascota}</h2>
    </div>
    
  )
}

export default Card