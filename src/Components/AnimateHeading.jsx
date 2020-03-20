import React, {useEffect, useState } from 'react'
import iconsContents from '../TestDb/iconsContents'
 
function AnimateHeading() {
     const[count, setcount] = useState(0)
     const[timerID, setID] = useState(0)
     const [{meal, colors},] = useState(iconsContents)

     const stylesI = {
        fontSize:'larger',
        marginLeft: '.2rem',
        color: colors[count]
     }
     
  
    
 
    useEffect(() => {
        var interval = setInterval(() => setcount(count + 1), 4000)

        setID(interval)

         return () => clearInterval(interval)
    },[count])
  
if(count === 100) {
    clearInterval(timerID)

}
        
  
 
    return (
        <>
<h2 style={{textAlign: 'center'}} >
{'Meals'}  <i className={meal[count]} style={stylesI} ></i>

</h2>


        </>
    )
}

export default AnimateHeading