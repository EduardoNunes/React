import React from 'react'
import Logo from './componentes/imgs/lakke-logo.png'

export default function App() {
  const const1=()=>{
    return ('estudo de js no react')
  }

  function const2() {
    return ('texto 2')
  }

  return(
    <>
      <section>
        <header>
          <p>{const1()} {const2()} + um texto qualquer</p>
          <p>{const2()}</p>
        </header>
        <section>
          <img src={Logo}></img>
          <img src='/img/logo192.png'></img>
        </section>
      </section>
    </>
  )
}