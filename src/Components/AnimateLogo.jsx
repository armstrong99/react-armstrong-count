import React, {useEffect, useState} from 'react'

function AnimateLogo(props) {
    const[count, setcount] = useState(0)
    const[timerID, setID] = useState(0)
    const logoAnimate =  'clickmeals.me' 
    let follower;
   !(count === 16) ?   follower ='|' :   follower = ''

      useEffect(() => {
        var interval = setInterval(() => setcount(count + 1), 1000/count - 1)

        setID(interval)

         return () => clearInterval(interval)
    },[count])

   const logo = logoAnimate.substring(0,count) + follower

   if(count === 16) {
    clearInterval(timerID)
}
    return(
        <>
 <span style={{color: props.choiceColor }}>{logo.substring(0,5)}</span>

<span style={{color: 'lime'}}>{logo.substring(5,10)}</span>

<span style={{color:'lime' }}>{logo.substring(10,11)}</span>

<span style={{color: props.choiceColor}}>{logo.substring(11,14)}</span>
        </>
    )
}

export default AnimateLogo