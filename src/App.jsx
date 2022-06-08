import { useState } from 'react'
import {Header} from './components/Header'
import { ListadoGastos } from './components/ListadoGastos';
import { Modal } from './components/Modal';


import { generarId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  


  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  function handleNuevoGasto(){
    setModal(true);    
    setTimeout(()=>{
      setAnimarModal(true);
    },350);
  }

  const guardarGasto = gasto =>{
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto])
    setAnimarModal(false);
    setTimeout(()=>{
      setModal(false);
    },350);
  };

  return (
    <div className={modal? 'fijar':''}>
      <Header
      presupuesto = {presupuesto}
      setPresupuesto = {setPresupuesto}

      gastos = {gastos}

      isValidPresupuesto = {isValidPresupuesto}
      setIsValidPresupuesto = {setIsValidPresupuesto}
      />

      {isValidPresupuesto &&
        (
        <>
          <ListadoGastos
          gastos = {gastos}
          >

          </ListadoGastos>
          <div className='nuevo-gasto'>
            <img src={IconoNuevoGasto} 
            alt="Icono nuevo gasto" 
            onClick={handleNuevoGasto}
            />
          </div>
        </>
        )
      }
      {modal && 
        <Modal 
        setModal = {setModal}
        animarModal = {animarModal}
        setAnimarModal = {setAnimarModal}
        guardarGasto = {guardarGasto}
        />
      }
      
    </div>
  )
}

export default App
