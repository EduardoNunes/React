import React from 'react'

export default function App() {
  const const1=()=>{
    return ('estudo de js no react')
  }

  function const2() {
    return ('texto 2')
  }

  return(
    <>
      <p>{const1()} {const2()} + um texto qualquer</p>
      <p>{const2()}</p>
    </>
  )
}