import cactus1 from '../assets/cactus1.jpg'
import cactus2 from '../assets/cactus2.jpg'
import cactus3 from '../assets/cactus3.jpg'
import cactus4 from '../assets/cactus4.jpg'
import Rate from './rate'
import { useState } from 'react'
function Galeria() {

  const [imagenes, setImages] = useState([
    { id: 1, src: cactus1, rate: 0 },
    { id: 2, src: cactus2, rate: 0 },
    { id: 3, src: cactus3, rate: 0 },
    { id: 4, src: cactus4, rate: 0 },
  ]);

  const ordenaImagen = (index, rate) => {
    //const imagenesOrdenadas =images  //ESTO ES INCORRECTO
    const imagenesOrdenadas = [...imagenes];
    imagenesOrdenadas[index].rate = rate;
    imagenesOrdenadas.sort((a, b) => b.rate - a.rate);
    setImages(imagenesOrdenadas);
  }


  return (
    <>
      <div>
        <div className="galeria">
          {imagenes.map((img, i) => (
            <div className='scoreCard' key={img.id}> {/*UN COMENTARIO */}
              <img src={img.src} alt="imagen" className='imagen' />
              <Rate avisaCambio={ordenaImagen} index={i} value={img.rate} />
            </div>
          ))}
        </div>
          <button className='promedio '>Calcular promedio: </button>
      </div>

    </>
  )
}

export default Galeria