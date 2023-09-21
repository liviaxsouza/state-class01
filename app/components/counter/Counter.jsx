import React from 'react'

function Counter({ defaultC, agregation, limitMax, limitMin }) {
  return (
    <>
    <p>Valor Padrão: {defaultC}</p>
    <p>Agregação: {agregation}</p>
    <p>Limite máximo do contador: {limitMax}</p>
    <p>Limite mínimo do contador: {limitMin}</p>
    </>
  )
}

export default Counter