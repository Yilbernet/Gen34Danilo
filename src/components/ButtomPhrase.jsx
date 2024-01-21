import React from 'react';
import phrases from '../utils/phrases.json';
import randomIndex from '../services/randomIndex';
import bgArray from '../utils/bgApp.json';

/**El ramdo para la frase y la imagen al dar click */
const ButtomPhrase = ({setshow,setapp}) => {
    const bgImag=randomIndex(bgArray);
    const setence=randomIndex(phrases);

    const handleButton=() =>{
      setshow(setence); 
      setapp(bgImag);
    }

  return (
    <button onClick={handleButton} >Probar mi suertes</button>
  )
}

export default ButtomPhrase
