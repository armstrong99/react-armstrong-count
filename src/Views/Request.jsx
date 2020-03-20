import React, { useEffect, useState } from 'react'
import MainHeader from '../Components/MainHeader';
import '../Components/CompoCss/Request.css'
import LinkBtn from '../Components/LinkBtn';
import { createBrowserHistory } from "history";
import {Link} from 'react-router-dom'

  
function Request() {
    const[Statement, setStatement] = useState('')
    const[exactP, setExactP] = useState('')
    const[name, setName] = useState('')
    const[phone, setPhone] = useState('')
    const[Plates, setPlate] = useState(0)
    const[bLocation, setLocation] = useState('')
    const[bPrice, setPrice] = useState('')
    const[animate, setAnimate] = useState(false)
    const[errorNotify, setError] = useState(true)
    const[errorStatement, setErrorStatement] = useState(true)
    const[errorPlate, setErrorPlate] = useState(true)
    const[errorLocation, setErrorLocation] = useState(true)
    const[errorName, setErrorName] = useState(true)
    const[errorPhone, setErrorPhone] = useState(true)
    const[, setErrorPosition] = useState(true)
   
    const history = createBrowserHistory()
   
    const handleChangeMeal = () => {
        history.goBack()
    }

    useEffect(() => {
        document.title = 'confirm request'
        
        
        if(sessionStorage.getItem('buyerLocation' )) {
            let buyerLocation = sessionStorage.getItem('buyerLocation');
            let {location, price} = JSON.parse(buyerLocation)  
            
            setLocation(location)
            setPrice(price)
        } else {
            setError(false)
            setErrorLocation(false)
            alert('Sorry, we cant process your request you seem not have a location or you didnt fill it while ordering the meal')
           }
        if(sessionStorage.getItem('orderStatement' )) {
            let orderStatement = sessionStorage.getItem('orderStatement')

            setStatement(orderStatement)
    
        } else {
            setError(false)
            setErrorStatement(false)
            alert('Sorry, we cant process your request you seem not have an order statement or you didnt fill it while ordering the meal')
           }
        if(sessionStorage.getItem('pdName' )) {
            let name = sessionStorage.getItem('pdName')
           setName(name)
    
        } else {
            setError(false)
            setErrorName(false)
            alert('Sorry, we cant process your request you seem not to give us your name')
           }
        if(sessionStorage.getItem('pdPhone' )) {
            let phone = sessionStorage.getItem('pdPhone')
           setPhone(phone)
    
        } else {
            setError(false)
            setErrorPhone(false)
            alert('Sorry, we cant process your request you seem to give us your phone number')
           }
        if(sessionStorage.getItem('platesNo' )) {
            let plate = sessionStorage.getItem('platesNo')
           setPlate(plate)
    
        } else {
            setError(false)
            setErrorPlate(false)
            alert('Sorry, we cant process your request you seem not to specify the number of plates')
           }
        if(sessionStorage.getItem('pdPosition' )) {
            let plate = sessionStorage.getItem('pdPosition')
           setExactP(plate)
    
        } else {
            setError(false)
            setErrorPosition(false)
            alert('Sorry, we cant process your request you seem not to give us your exact position')
           }
        
        

    

        window.addEventListener('scroll', e => {
    const body = document.body;
    const html = document.documentElement;
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      if(docHeight - (windowHeight + window.pageYOffset) < 70) {
        setAnimate(true)
    } else setAnimate(false)
})
         
 
        
         
     },[])
   return(
        <>
<MainHeader />
<h2 id='reqH'><p style={errorNotify ? {color: 'black'} : {color: 'red'}}>{errorNotify ? 'Confirm Request' : 'Error !!!'}</p></h2>

<section id='reqSec'>
<ol style={{listStyleType:'none', padding:'1rem'}}>
    <li>
    <p style={{fontWeight:'bold'}}>You made the below order:</p>
{ !errorStatement ? (<span style={{color: 'red', fontSize: 'large', fontWeight: 'bolder'}}> Error - No order statement was made!!!</span>) : 
(
    <>
<p className='mealC'><em>{Statement}</em></p>


    </>

 )
}
  
    </li>
    <br />
    <hr />
    <p style={{fontWeight:'bold'}}>Personal Details:</p>

    <li>
  <p className='mealC'><em>{bLocation ? bLocation: ''} - {exactP ? exactP: ''}</em></p>
    </li>

    
    <li>
        <i className=''>icon</i> {!errorName ? (<span style={{color: 'red', fontSize: 'large', fontWeight: 'bolder'}}>Error - No name provided </span>) : name }
    </li>
    <br />
    <li>
        <i className=''>icon</i> {!errorPhone ? (<span style={{color: 'red', fontSize: 'large', fontWeight: 'bolder'}}>Error - No phone number provided </span>) : phone }
    </li>
    <br />
    <li>
        <p>icon {!errorPlate ?  (<span style={{color: 'red', fontSize: 'large', fontWeight: 'bolder'}}>Error - No Plate size, number or amount selected !!!</span>) :  <em style={{color:'rgb(165, 42, 42)'}}> {Plates} (plates)</em>  }
             </p>

    </li>
    <br />
    <hr />
    <p style={{fontWeight:'bold'}}>Eatery Policy:</p>

    <li>
        {!errorLocation ? (<span style={{color: 'red', fontSize: 'large', fontWeight: 'bolder'}}>Error - No location selected !!!</span>) : (
            <p style={{lineHeight: '2rem'}}>
        According to <b style={{color:'rgb(165, 42, 42)'}}>Mandees eatry</b>, Foods(meal) orderd from <span style={{color:'rgb(165, 42, 42)'}}>{bLocation}</span>, has an additional cost of <span style={{color:'rgb(165, 42, 42)'}}>N{bPrice}</span> 
        </p>
        )}
        


    </li>
   
     
</ol>
<section style={{display: errorNotify ? 'flex' : 'none', marginBottom: '2rem'}}>

<Link to='/ordernow'>

<LinkBtn title='I agree, order now' animate={animate} />

</Link>
<span 
style={{color: 'blue', fontSize: 'medium', 
display: 'inline', 
margin: '3.5rem auto auto 2rem', opacity: '.7', 
fontWeight: 'bold'}}
onClick={handleChangeMeal}
>Change meal request </span>


</section>
 
</section>

        </>
    )
}

export default Request