import { useState } from "react"
import Star from "./star"

function Rate({avisaCambio, index, value}) {

    //const stars=[1,2,3,4,5];
    const  stars = Array.from({length:5},(_,i)=> i+1)
     
    const [raeting,setRaiting]=useState(value)

    const califica=(star)=>{
      setRaiting(star)
      avisaCambio(index,star)
    }
    
  return (
    <> 
      <div className="card">
        <div className="star" >
            {stars.map((star) =>( 
              <samp key={star}> 
              <Star califica={califica} star={star} raeting={raeting}/> 
              </samp>))}
                
                {/*<samp  key={star} className={star <= raeting ? "active":"inactive"}>
                  <a onClick={()=>califica(star)}> {'\u2605'}</a>
                </samp>
            ))} */}
        </div>
      </div>
    </>
  )
}

export default Rate