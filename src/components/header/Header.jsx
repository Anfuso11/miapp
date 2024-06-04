import React from 'react'
import { NavBar } from './NavBar'
import { Carrito } from './Carrito'


export const Header = (props) => {

  return (
    <header className="header">
        <h1 className='logo'>SneakersArg</h1>
        <NavBar />
        <Carrito numerito={props.numerito} />
    </header>
  )
}