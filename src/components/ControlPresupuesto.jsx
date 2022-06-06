import React from 'react'

export const ControlPresupuesto = ({presupuesto}) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Grafica Aquí</p>
        </div>

        <div>
            <p>
                <span>Presupuesto </span>${presupuesto}
            </p>
        </div>

    </div>
  )
}
