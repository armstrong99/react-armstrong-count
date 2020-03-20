import React, { useState, useEffect } from 'react'
import MainHeader from '../Components/MainHeader';
import SellerBanner from '../Components/SellerBanner';
import ButtonBotmCol from '../Components/ButtonBotmCol';
import menuDb from '../TestDb/menuDb'
import '../Components/CompoCss/OrderMeal.css'
import iconsObj from '../TestDb/iconsContents'
import locationOptions from '../TestDb/locationDb'
import LinkBtn from '../Components/LinkBtn';
import {Link} from 'react-router-dom'

function OrderMeal(props) {
    const[animate, setanimate] = useState(false)
     const[meals,] = useState(menuDb)
    const[{meal, colors},] = useState(iconsObj)
    const[locations,] = useState(locationOptions)
    const[count, setcount] = useState(0)
    const[timerID, setID] = useState(0)
    const[tValue, setTValue] = useState('')
    const[nValue, setNValue] = useState('')
    const[pValue, setPValue] = useState('')
    const[eValue, setEValue] = useState('')

    
    useEffect(() => {
window.addEventListener('scroll', e => {
    const body = document.body;
    const html = document.documentElement;
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

     if(docHeight - (windowHeight + window.pageYOffset)  <= 5) {
        setanimate(true)
    } else setanimate(false)
})

        document.title = 'Order something'
        
        var interval = setInterval(() => setcount(count + 1), 4000)

        setID(interval)

         return () => clearInterval(interval)
    },[count])
  
    if(count === 90) {
        clearInterval(timerID)

    }
    const handleTextarea = ({target}) => {
       setTValue(target.value)
       
         return sessionStorage.setItem('orderStatement', target.value)
       }
    const handlepName = ({target}) => {
       setNValue(target.value)
       
         return sessionStorage.setItem('pdName', target.value)
       }
    const handlePhone = ({target}) => {
       setPValue(target.value)
       
         return sessionStorage.setItem('pdPhone', target.value)
       }
    const handlePosition = ({target}) => {
       setEValue(target.value)
       
         return sessionStorage.setItem('pdPosition', target.value)
       }
     
    return (
        <>
            <MainHeader />

<SellerBanner 
name='Mandees eatry' 
image='https://media-cdn.tripadvisor.com/media/photo-s/05/09/93/51/jollof-cafe.jpg' />
        <section style={{padding: '1em'}}>
    

<ButtonBotmCol 
title='Menu list' 
choiceColor='rgb(165, 42, 42)' />
<section className='orderMeal'>
{
    meals.map(({name}, index) => {
      return(
       <p key={index + 9} >
  <i className={meal[count + index]} key={index + 7} style={{color: colors[count + index]}} ></i> {name}
        </p>
      )  
      
    })
}
</section>
<br />
<strong className='orderstrong'>Please what can we get for you ? </strong>

<textarea 
onChange={handleTextarea}
order='order'
value={sessionStorage.getItem('orderStatement') ? sessionStorage.getItem('orderStatement') : tValue === '' ? tValue : undefined } 
placeholder='make an order with attached price e.g Get me Rice N100 with fried plaintain N50 and a bottle of chapman' />

<p style={{fontSize: 'small', marginTop: '0', color: 'blue'}}>
Your choice should match with the menu above, thanks
</p>
<br />
 

<strong className='orderstrong'>Choose location from Mandees supply area  </strong>
<section className='orderMealLo'>
{
    locations.map(({location, price}, index) => {
        return (
            <>
            <section style={{marginTop: '1rem'}} key={index + 1}>
            <input  key={index + 2}
            type='checkbox' 
            value={location}
            onClick={
                e => sessionStorage.setItem('buyerLocation',JSON.stringify({'location': e.target.value, 'price': price}))}
            />{location}<span key={index + 3} style={{color:'lime'}}> ({price})</span>  

            </section>

            </>

        )
    })
}
</section>
<p style={{fontSize: 'small', marginTop: '0', color: 'blue'}}>
(extra charges)* 
</p>
<br /><br />
<strong className='orderstrong'>Number of Plates / Items ?</strong> 
<input type='number' onChange={e => sessionStorage.setItem('platesNo', e.target.value)} /> 
<br /><br />
<br />
<fieldset style={{padding: '1rem'}}>
    <legend>Personal Details</legend>

    <strong className='orderstrong'>Your known name ?</strong> 
    <br />
<br />
<input
value={sessionStorage.getItem('pdName') ? sessionStorage.getItem('pdName') : nValue === '' ? nValue : undefined } 
type='text' 
placeholder='Your known(popular) name' 
autoComplete='true'
autoSave='true'
onChange={handlepName} /> 

<br /><br />

<strong className='orderstrong'>Your Valid Phone number ?</strong> 
<br />
<br />
<input
value={sessionStorage.getItem('pdPhone') ? sessionStorage.getItem('pdPhone') : pValue === '' ? pValue : undefined } 
type='phone' 
placeholder='working phone number' 
autoComplete='true'
autoSave='true' 
onChange={handlePhone} /> 
<br /><br />

<strong className='orderstrong'>Your exact position {sessionStorage.getItem('buyerLocation') ? 'in ' + (JSON.parse(sessionStorage.getItem('buyerLocation')))['location'] : 'please'} ?</strong> 
<br />
<br />
<input
value={sessionStorage.getItem('pdPosition') ? sessionStorage.getItem('pdPosition') : eValue === '' ? eValue : undefined } 
type='phone' 
placeholder='where exactly are you' 
autoComplete='true'
autoSave='true' 
onChange={handlePosition} /> 
</fieldset>



 
<Link to='/request'>
<LinkBtn title='Make request' animateCheck={animate}  />
</Link>
 



        </section>

         </>
    )
}

export default OrderMeal