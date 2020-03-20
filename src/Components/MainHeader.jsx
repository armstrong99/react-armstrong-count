import React, { useEffect, useState } from 'react'
import AnimateLogo from './AnimateLogo';
import '../Components/CompoCss/mainHeader.css'
import { createBrowserHistory } from "history";


function MainHeader(props) {
    const history = createBrowserHistory()
   
    const handlePrevRoute = () => {
        if(props.backRoute === '/home') {
           return history.go(-3)
        } 
          else return history.goBack()
    }
     const styleNavMain = {
        backgroundColor: 'white',
        height: '2.5rem',
        paddingTop:' .5rem',
        transition: 'cubic-bezier(0.215, 0.610, 0.355, 1) 4s',

             }
    const styleNav = {

        backgroundColor: 'transparent',
        height: '2.5rem',
        paddingTop:' .5rem',
        top: '0',
        position: 'fixed',
        width: '100%',
        transition: 'cubic-bezier(0.215, 0.610, 0.355, 1) 7s 4s',
         }
const [styleCheck, setstyleC] = useState(true)
useEffect(() => {
    window.addEventListener('scroll', e => {
if(window.pageYOffset > 15) {
       setstyleC(false)
} else setstyleC(true)
    })
})
     return(
        <>
         <nav id='mainHeader' style={styleCheck ? styleNavMain : styleNav} >
    <ul id='mainHeader' >
        <li onClick={handlePrevRoute} > <i className='fa fa-long-arrow-left'>side</i> </li>
        <li> <AnimateLogo choiceColor='rgb(165, 42, 42)' /> </li>
    </ul>
</nav>
 

        </>
    )
}

export default MainHeader