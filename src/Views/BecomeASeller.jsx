import React, { useState, useEffect } from 'react'
import MainHeader from '../Components/MainHeader';
import {Link} from 'react-router-dom'
import SearchBtn from '../Components/SearchBtn';
import {Switch, Route} from 'react-router-dom'
import PaymentSeller from './PaymentSeller';

 
 
function BecomeASeller(props) {
    const styler = {
     padding: '1rem',
     fontSize: 'x-large'
     }
     const styleP = {
         lineHeight: '3rem'
     }
 
     const[charge, setCharges] = useState('')
     const[region, setRegion] = useState('')
     const[locationList, setLocaList] = useState('')
     const[route, setRoute] = useState(false)
 
     const handleRegion = (e) =>  setRegion(e.target.value)
     
     const handleCharges = (e) =>  setCharges(e.target.value)

     const stylerPage = {
         display: 'none',
         transition: 'cubic-bezier(0.215, 0.610, 0.355, 3) 3s 5.5s',
        }
         
 

     let sellerArr = [];

     const handlerSellerArr = e => {

          e.preventDefault()
                sellerArr.push({
                  'region': region,
                  'charge': charge,
                  'sellerFilter': true,
              }) 
 
              localStorage.setItem(region,JSON.stringify(sellerArr))
              setCharges('')
              setRegion('')
              
             

              }

 
  useEffect(() => {
      document.title = 'Become a Seller'
      console.log(props.location.pathname)
if( props.location.pathname === '/becomeseller/payment') {
    setRoute(true)
} else {
    setRoute(false)

}

    if(sessionStorage) {
        let arr = [];
         let dbValues =  localStorage

 
        let keyss = Object.keys(dbValues)

     keyss.forEach(key => {
        let one = JSON.parse(dbValues[key])
         arr.push(one[0])

          //try to see if you can set this loop to run on ony properties that are interable

             })

              if(arr.length >= 1) {
              const newArr = arr.filter(range => Object.keys(range).includes('sellerFilter') )
              console.log(newArr)
                  setLocaList(newArr)
              }
              if(arr.length < 1) {
                const newArr = arr.filter(range => Object.keys(range).includes('sellerFilter') )
                setLocaList(newArr)
               }
 
  
 

               }
   }, [region, props.location.pathname])

     return(
        <>
<MainHeader />
<section style={route ? stylerPage : {display: ''}}>
<img src='' alt='' />

<article style={styler}>

<p style={styleP}>You can become a seller and Earn up to  <span style={{fontSize: 'x-large', color: 'rgb(165, 42, 42)'}}>5X</span> your average profit </p>

<p style={styleP}>You dont even need to own a shop, just know how to cook, bake and package nice meals <Link to='/about'> <i style={{fontSize: 'medium'}}> Read more</i></Link> </p>

</article>



<fieldset style={{paddingTop: '1em', border: 'none'}} >
    <legend>Register</legend>
    <form>
        <label htmlFor='name'><strong>Name<span style={{color: 'red'}}>*</span></strong></label>
        <br />
        <br />
        <SearchBtn pHolder='your market name(popular, aka)' />

        <br />

        <label htmlFor='image'><strong>Upload Image<span style={{color: 'red'}}>*</span></strong></label>

        <br />
        <br />
        <br />

        <label htmlFor='place'><strong>Your market supply regions<span style={{color: 'red'}}>*</span></strong></label>

        <section style={{display:'flex',flexWrap: 'wrap', justifyContent: 'space-between', paddingTop: '1rem'}} >

        

          
          <input 
          type='text' 
          value={region} 
          name='extraC' 
          placeholder='place / region' 
          onChange={handleRegion} />

          <input 
          type='number' 
          value={charge} 
          name='extraC' 
          placeholder='charges e.g 50' 
          onChange={handleCharges} />
         
         <button  name='Linkbtn' onClick={handlerSellerArr}>Add</button>
        </section>
        <fieldset style={{marginTop: '2rem'}}>
            <legend>Regions / Price</legend>
            <ol>
{ locationList !== '' ?
    locationList.map(({region, charge}) => {
        return(
            <>
            <li style={{display: 'flex', justifyContent: 'space-around', fontWeight:'bold'}} >
                <section>
                {region} - <span  style={{color: 'lime'}}>N{charge}</span>
                </section>
                <i 
                className='fa fa-delete' 
                onClick={e => {
                    localStorage.removeItem(region)
                    setRegion(region)
                    setCharges(charge)
                 } }>del</i>
            </li>
            <br />
            
            

            </>
            
        )
    }) : ''
}
            </ol>
        </fieldset>

    </form>
</fieldset>
</section>

<Switch> <Route  path='/becomeseller/payment' component={PaymentSeller} /> </Switch>

<br />
<Link to='/becomeseller/payment'>
<span style={{marginLeft:'1rem', fontWeight: 'bold'}}>
{route ? '' : 'Next'}
</span>
</Link>


<br /><br />
 

        </>
    )
}

export default BecomeASeller