import cactus1 from '../assets/cactus1.jpg'
import cactus2 from '../assets/cactus2.jpg'
import cactus3 from '../assets/cactus3.jpg'
import cactus4 from '../assets/cactus4.jpg'
import Rate from './rate'
import Modal from './modal'
import { useState, useRef } from 'react'
import Envia from './envia'
import Enviar from './promed'
function Galeria() {

  const [imagenes, setImages] = useState([
    { id: 1, src: cactus1, rate: 0, ref: useRef() },
    { id: 2, src: cactus2, rate: 0, ref: useRef() },
    { id: 3, src: cactus3, rate: 0, ref: useRef() },
    { id: 4, src: cactus4, rate: 0, ref: useRef() },
  ]);

  const ordenaImagen = (index, rate) => {
    //const imagenesOrdenadas =images  //ESTO ES INCORRECTO
    const imagenesOrdenadas = [...imagenes];
    imagenesOrdenadas[index].rate = rate;
    imagenesOrdenadas.sort((a, b) => b.rate - a.rate);
    setImages(imagenesOrdenadas);
  }

  
  const[modal,setModal]=useState(false)
  const[promedio,setPromedio]= useState(0)

  const sacaPromedio = (imagenes) =>{
    const prom = 
      imagenes.reduce((acum,img)=>(acum + img.rate),0 )/imagenes.length;
    console.log(`El promedio es: ${prom}`);
    setModal(true)
    setPromedio(prom)
  };
  const reinicia = ()=>{
    const newImagenes = imagenes.map((img) => ({ ...img, rate: 0 }));
    console.log('reinicia funciona: '+newImagenes)
    setImages(newImagenes);
    //MODIFICA EL VALOR DEL COMP: RATE
    imagenes.map((img)=> img.ref.current.reset())
  };
 
  return (
    <>
      <div>
        <div className="galeria">
          {imagenes.map((img, i) => (
            <div className='scoreCard' key={img.id}> {/*UN COMENTARIO */}
              <img src={img.src} alt="imagen" className='imagen' />
              <Rate ref={img.ref} avisaCambio={ordenaImagen} index={i} value={img.rate} />
            </div>
          ))}
        </div>
          
          {/* EL MAESTRO USA ESTE METODO PARA CALCULAR EL PROMEDIO Y AÑADIR EL BOTON A LA PAGINA
          <button className='promedio ' onClick={promedio()}>Calcular promedio </button>
          <Enviar  onClick={sacaPromedio}>
          calcular promedio
          </Enviar>
          */}
          <Enviar  onClick={()=>sacaPromedio(imagenes)}>
          calcular promedio
          </Enviar>
          <Modal isOpen={modal} onClose={()=>setModal(false)} >
            <h2>CALIFICACION DE LA GALERIA</h2>
            <p>El promedio de la calificacion es: {promedio}</p>
            <Envia onClick={reinicia}>Reiniciar</Envia>
          </Modal>
          
      </div>

    </>
  )
}

export default Galeria