import { useState, useEffect } from 'react'
import {Header} from './components/Header'
import { ListadoGastos } from './components/ListadoGastos';
import { Modal } from './components/Modal';


import { generarId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {

  const [gastos, setGastos] = useState([]);

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setModal(true);    
      setTimeout(()=>{
        setAnimarModal(true);
      },350);
    }
  }, [gastoEditar])

  function handleNuevoGasto(){
    setModal(true);    
    setGastoEditar({});
    setTimeout(()=>{
      setAnimarModal(true);
    },350);
  }

  //Guardar Gasto
  const guardarGasto = gasto =>{
    if(gasto.id){
      //Editar Gasto
      const gastosActualizados = gastos.map(gastoState=>
        gasto.id === gastoState.id? gasto:gastoState
      );
      setGastos(gastosActualizados);
      setGastoEditar({});
    }else{
      // Nuevo Gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    }
    
    setAnimarModal(false);
    setTimeout(()=>{
      setModal(false);
    },350);
  };

  //Eliminar gasto
  const eliminarGasto=(id)=>{
    console.log(`Eliminar gasto ${id}`)

    const gastosActualizados = gastos.filter(gastoState=>
      id !== gastoState.id);
    setGastos(gastosActualizados)
  }

  return (
    <div className={modal? 'fijar':''}>
      <Header
      gastos = {gastos}
      presupuesto = {presupuesto}
      setPresupuesto = {setPresupuesto}
      isValidPresupuesto = {isValidPresupuesto}
      setIsValidPresupuesto = {setIsValidPresupuesto}
      />

      {isValidPresupuesto &&
        (
        <>
          <ListadoGastos
            gastos = {gastos}
            setGastoEditar = {setGastoEditar}
            eliminarGasto = {eliminarGasto}
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
          gastoEditar = {gastoEditar}
          setGastoEditar = {setGastoEditar}
        />
      }
      
    </div>
  )
}

export default App
