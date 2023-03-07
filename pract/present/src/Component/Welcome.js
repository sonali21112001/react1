//useState 
import React, { useState } from 'react'

const Welcome = () => {
    const [name,setname]=useState('Welcome Visitors')

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={()=>setname('thank you..!')}> Okay</button>
    </div>
  )
}

export default Welcome


