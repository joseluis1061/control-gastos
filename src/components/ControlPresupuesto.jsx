import React from 'react'
import { useState ,useEffect } from 'react'


export const ControlPresupuesto = ({gastos, presupuesto}) => {

  console.log(`Este son gastados: \n ${gastos}`);

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(()=>{
    console.log(gastos);
    
    const totalGastado = gastos.reduce((total, gasto)=> total + gasto.cantidad, 0);
    setGastado(totalGastado);

    const totalDisponible = presupuesto - totalGastado;
    setDisponible(totalDisponible);  
    
  },[gastos]);

  const formatearCantidad = (cantidad)=>{
    cantidad = Number(cantidad);
    return cantidad.toLocaleString('en-US',
      { style: 'currency', currency: 'USD' }
    );
  }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Grafica Aquí</p>
        </div>

        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
            </p>

            <p>
                <span>Disponible: </span>{formatearCantidad(disponible)}
            </p>

            <p>
                <span>Gastado: </span>{formatearCantidad(gastado)}
            </p>
        </div>

    </div>
  )
}
