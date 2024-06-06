import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function D1() {
    const nav=useNavigate();
    const han=(e)=>{
nav('/d2',{state:"gurubaran"});
    }
  return (
    <div>D1
<button onClick={e=>han(e)}>demo</button>

    </div>
  )
}
