import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

const URL = styled.input`
padding: 1rem;
max-width: 100%;
align-self: center;
margin-top: 2rem;
font-size: large;
outline: none;
border: transparent;

& ~ & {
    background: rgba(92, 250, 0, 0.862);
    border-radius: 1rem;
    outline: none;
    border: transparent;
    font-weight: bold;
    letter-spacing: .1rem;
    margin-left: .5rem;
}

&.Res {
    border-radius: 5%;
}
`
const BLOCKS = styled.div`
    background: pink;
    padding: .2rem;
    text-align: center;
    margin-top: .5rem;
    color: white;
    font-weight: bold;
`
const Results = ({perc, label, res}) => {
    // console.log((perc))
const[colors, ] = useState(
        ['rebeccapurple', 'brown','darkmagenta','darkochid','darkred','darkmagenta','firebrick','dimgrey','darkmagenta','darkochid','darkred', 'limegreen','darkslategrey','darkslategray','darkviolet','dimgray','dimgrey','darkochid','darkred','darkslategrey','darkslategray','darkviolet','maroon','rebeccapurple', 'brown','rebeccapurple', 'brown','darkmagenta','darkochid','darkred','darkmagenta','firebrick','dimgrey','darkmagenta','darkochid','darkred', 'limegreen','darkslategrey','darkslategray','darkviolet','dimgray','dimgrey','darkochid','darkred','darkslategrey','darkslategray','darkviolet','maroon','rebeccapurple', 'brown','rebeccapurple', 'brown','darkmagenta','darkochid','darkred','darkmagenta','firebrick','dimgrey','darkmagenta','darkochid','darkred', 'limegreen','darkslategrey','darkslategray','darkviolet','dimgray','dimgrey','darkochid','darkred','darkslategrey','darkslategray','darkviolet','maroon','rebeccapurple', 'brown','brown','darkmagenta','firebrick','dimgrey','darkmagenta','darkochid','darkred', 'limegreen','darkslategrey','darkslategray','darkviolet','dimgray','dimgrey','darkochid','darkred','darkslategrey','darkslategray','darkviolet','maroon','rebeccapurple', 'brown','darkmagenta','darkochid','darkred','darkmagenta','firebrick','dimgrey','darkmagenta','darkochid','darkred', 'limegreen','darkslategrey','darkslategray','darkviolet','dimgray','dimgrey','darkochid','darkred','darkslategrey','darkslategray','darkviolet','maroon','rebeccapurple', 'brown','darkmagenta','darkochid','darkred', 'darkmagenta','darkochid','darkred', 'limegreen','darkslategrey','darkslategray','darkviolet','dimgray','dimgrey','darkviolet','maroon','rebeccapurple','brown', 'darkmagenta','darkochid','darkred', 'limegreen','darkslategrey','darkslategray','darkviolet','dimgray','rebeccapurple', 'brown','darkmagenta','darkochid','darkred','darkmagenta','firebrick','dimgrey','darkmagenta','darkochid','darkred', 'limegreen','darkslategrey','darkslategray','darkviolet','dimgray','dimgrey','darkochid','darkred','darkslategrey','darkslategray','darkviolet','maroon','rebeccapurple', 'brown','rebeccapurple', 'brown','darkmagenta','darkochid','darkred','darkmagenta','firebrick','dimgrey','darkmagenta','darkochid','darkred', 'limegreen','darkslategrey','darkslategray','darkviolet','dimgray','dimgrey','darkochid','darkred','darkslategrey','darkslategray','darkviolet','maroon','rebeccapurple', 'brown', 'rebeccapurple', 'brown','darkmagenta','darkochid','darkred','darkmagenta','firebrick','dimgrey','darkmagenta','darkochid','darkred', 'limegreen','darkslategrey','darkslategray','darkviolet','dimgray','dimgrey','darkochid','darkred','darkslategrey','darkslategray','darkviolet','maroon','rebeccapurple', 'brown', ])

    const[count, setcount] = useState(0)
    const[timerID, setID] = useState(0)
    useEffect (() => {
        var interval = setInterval(() => setcount(count + 1), 100)

        setID(interval)

         return () => clearInterval(interval)
    },[count])
    if(count === perc) {
        
        clearInterval(timerID)
    
    }
    return ( 
        <>

{/* <form style={{display:'flex'}}> */}

 <p> {res}
</p>
<BLOCKS style={{background:colors[count], maxWidth:`${count}%`}}>{count}%</BLOCKS>
  {/* <URL type='button' value={res} className='Res' />     */}
{/* </form> */}


        </>
     );
}
 
export default Results;