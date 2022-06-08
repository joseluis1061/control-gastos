import React from 'react'
import { NuevoPresupuesto } from './NuevoPresupuesto'
import { ControlPresupuesto } from './ControlPresupuesto'

export const Header = ({
  gastos,
  presupuesto,
  setPresupuesto,  
  isValidPresupuesto,
  setIsValidPresupuesto}) => {

  return (
    <header>
        <h1>Planidicador de Gastos</h1>
        {
            isValidPresupuesto? 
            (
            <ControlPresupuesto
            gastos = {gastos}
            presupuesto = {presupuesto}
            
            />
            ):
            (<NuevoPresupuesto
                presupuesto = {presupuesto}
                setPresupuesto = {setPresupuesto}
                isValidPresupuesto  = {isValidPresupuesto}
                setIsValidPresupuesto = {setIsValidPresupuesto}
                />
            )
        }

        
    </header>
  )
}
