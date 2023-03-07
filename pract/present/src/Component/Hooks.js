// Count usestate and useEffect

import React, { useEffect, useState } from 'react'

const Hooks = () => {
    const [count,setcount]=useState(0)

    useEffect(()=>{
        console.log('Increase Count');
    })

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}> Click</button>
    </div>
  )
}

export default Hooks









