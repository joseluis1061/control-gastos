import React from 'react'
import { formatearFecha } from '../helpers';

export const Gasto = ({gasto}) => {
  const {categoria, nombre, cantidad, id, fecha} = gasto;
  console.log(gasto)
  return (
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="nombre-gasto">
            Agregando {''}
            <span>{formatearFecha(fecha)}</span></p>
        </div>
      </div>
      


      
    </div>
  )
}