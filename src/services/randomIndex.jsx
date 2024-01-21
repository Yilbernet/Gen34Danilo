
/**Se crea esta funcion para trabajar de manera aleatoria 
 * con imagenes y frases el math.random entre 0 y 1 el 
 * math.floor es para el redondeo el array lenght  se
 * mide la cantida de objetos q hay en freses y las imagenes
 */
const RandomIndex = (array) => {
    const index= Math.floor(Math.random()*array.length);
    return array[index]
}

export default RandomIndex;



