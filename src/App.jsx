import { useState } from 'react'
import './App.css'
import RandomPhrase  from './components/RandomPhrase'
import phrases from './utils/phrases.json';
import randomIndex from './services/randomIndex';
import ButtomPhrase from './components/ButtomPhrase';
import bgArray from './utils/bgApp.json';


function App() {
/**Se crea dos variables para llamar phrases y bgArray que se encuentra 
 * en las importaciones
 */
const bgData=randomIndex(bgArray);
 const setence= randomIndex(phrases);
 /** se crea dos estados que se los guarda dentro de una constante
  * estos guardan las variables que se crearon en la parte superior 
  * sentence y bgData
  */
 const [show, setshow] = useState(setence);
 const[bgApp, setapp]=useState(bgData);
/**Se crea un objeto donde se guarda las imagenes este 
 * llama dentro del backgroungImage a la carpeta utils bgApp 
 * donde dentro de esa carpeta se guarda un arreglo que llamar de manera dinamicas
 * a las imagenes que se encuentran public
 */
const bgStyle={
  backgroundImage: `url('../assets/fondo${bgApp}.png')`,
}
  return (
    /**Aqui dentro del primer div ubicamos el style y llamamos 
     * al objeto que se creo anteriormente que es bgStyle
     */
    /**Luego se tiene  a los proms */
   <div className='app' style={bgStyle}> 
    <div className="container">
    <h2>Galleta de la Fortuna</h2>
    <ButtomPhrase
    setshow={setshow}
    setapp={setapp} />
    <RandomPhrase 
    
    show={show} />
   </div>
   </div>
  )
}

export default App
