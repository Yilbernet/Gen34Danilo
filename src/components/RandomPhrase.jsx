import React from 'react'

const RandomPhrase = ({show}) => {
  //con un console log(show ) se trae el objeto completo
  //con una variable lo desetruramos el objeto
  /**aqui se llama al author y phrase que estan en la carpeta utils phrases.json */
  const {author, phrase}=show;
  return (
    <div>
      <p>{phrase}</p>
      <footer>Autor:  {author}</footer>
    </div>
  )
}

export default RandomPhrase
