import React, { useState } from 'react';
import Armstrong from './CounterModule';

const TestPack = () => {

  const[val, setVal] = useState('')
  const[sBol, setBol] = useState('')

  const getCount = c => setVal(c)
 const handleSBol = () => setBol('start')

    return (  
        <>
         <Armstrong inter={2} startBol={sBol} stopTime={10} getCount={getCount}>

<section style={{display:'flex', height: '100vh',alignItems:'center', justifyContent:'center', flexFlow:'column', background:'#c0c0c000'}}>


           <h1>{val} </h1>
            <div style={{
                background:'red',
                width:`${val}rem`
            , 
            textAlign:'center',
            padding: '1rem',
            color: 'white',

            }}>
                {Number( val ) * 2 }
            </div>
<button style={{
    padding: '2rem',
    marginTop: '3rem',
    background: 'limegreen',
    color: 'white',
    border: 'none',
    outline: 'none',
    borderRadius: '3rem',
    width: '10rem',
    fontSize: '1.45rem',
    }} onClick={handleSBol}>Start</button>   
</section>
         </Armstrong>
        
        </>
    );
}
 
export default TestPack;