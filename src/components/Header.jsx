import React from 'react'
import { NuevoPresupuesto } from './NuevoPresupuesto'
import { ControlPresupuesto } from './ControlPresupuesto'

export const Header = ({
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
