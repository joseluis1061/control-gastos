import React from 'react'
import { Mensaje } from './Mensaje';
import { useState } from 'react';

export const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto}) => {
  const [mensaje, setMensaje] = useState('');

  const handlePresupuesto = (e)=>{
    e.preventDefault();
    if(!Number(presupuesto)||Number(presupuesto)<0){
        setMensaje('No es un presupuesto valido')
        return;
    }
    setMensaje('');
    setIsValidPresupuesto(true)
  }
  
    return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form
         onSubmit={handlePresupuesto}
         className='formulario'
         >
            <div className="campo">
                <label> Definir Presupuesrto</label>
                <input 
                    className='nuevo-presupuesto'
                    type='number'
                    placeholder='Añade tu presupuesto'
                    value={presupuesto}
                    onChange = {e=>
                        Number(setPresupuesto(e.target.value))
                    }
                />
            </div>
            <input type="submit" 
                value='Añadir'
            />
            {mensaje && 
            <Mensaje
                tipo='error'
            >
                {mensaje}
            </Mensaje>}
        </form>
    </div>
  )
}
