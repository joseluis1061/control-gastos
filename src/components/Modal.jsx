import React, { useEffect } from 'react'
import { useState } from 'react'
import { Mensaje } from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'


export const Modal = ({
  setModal, 
  animarModal, 
  setAnimarModal, 
  setGastoEditar,
  guardarGasto,
  gastoEditar}) => {

  const [mensaje, setMensaje] = useState('')
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');
  const [fecha, setFecha] = useState('')
  const [id, setId] = useState('');

  useEffect(() => {
    //Si esta vacio es un registro nuevo si no vamos a editar
    if(Object.keys(gastoEditar).length > 0){
      //Agrego la información al formulario
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setFecha(gastoEditar.fecha);
      setId(gastoEditar.id);
    }
  }, [])

  const ocultarModal=()=>{
    setAnimarModal(false);
    setGastoEditar({});
    setTimeout(()=>{
      setModal(false);
    },350);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if([nombre,cantidad,categoria].includes('')){
      setMensaje('Todos los campos son obligatorios');

      setTimeout(()=>{
        setMensaje('');
      },3000);
      return 
    }

    const gasto = {
      nombre,
      cantidad,
      categoria,
      id,
      fecha
      
    };
    guardarGasto(gasto)
  };

  return (
    <div className='modal'>
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar modal" 
        onClick={ocultarModal}/>
      </div>

      <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal? 'animar': 'cerrar'}`

      }>
        <legend>{gastoEditar.nombre? 'Editar Gasto':'Nuevo Gasto'}</legend>

        {//Mensaje de error
          mensaje&& 
          <Mensaje
            tipo='error'
          >
            {mensaje}
          </Mensaje>
        }

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>

          <input 
            id="nombre" 
            type="text" 
            placeholder='Añade el nombre del gasto'
            value = {nombre}
            onChange={e=> setNombre(e.target.value)}

            />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>

          <input 
            id="numbrer" 
            type="text" 
            placeholder='Añade la cantidad del gasto. Ej: 300'
            value = {cantidad}
            onChange={e=> setCantidad(Number(e.target.value))}
            />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>

          <select id="categoria"
          value = {categoria}
          onChange={e=> setCategoria((e.target.value))}
          > 
            <option value="">-- Selecciona --</option>
            <option value="ahorro">-- Ahorro --</option>
            <option value="comida">-- Comida --</option>
            <option value="casa">-- Casa --</option>
            <option value="gastos">-- Gastos Varios --</option>
            <option value="ocio">-- Ocio --</option>
            <option value="salud">-- Salud --</option>
            <option value="suscripciones">-- Suscripciones --</option>
          </select> 
        </div>

        <input 
          type="submit" 
          value = {gastoEditar.nombre? 'Guardar Cambios':'Añadir Gasto'}
        />
      </form>
    </div>
  )
}
