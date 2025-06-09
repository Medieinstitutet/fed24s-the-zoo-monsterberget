import React from 'react'
import { Navigation } from '../Navigation/Navigation'
import logo from '../../assets/images/Logo.png'


export const Header = () => {
  return (
    <header>
      <img className="Logo" src={logo} alt="The Zoo Monsterberget Logo" />
      <div>

      </div>
      <Navigation />
    </header>
  )
}

export default Header
