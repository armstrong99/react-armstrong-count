import React, { useState } from 'react'
import '../Components/CompoCss/MealsList.css'
function MealsList({imageMeal, mealName, mealPrice, mealContent}) {

const[styler, setstyle] = useState(0)
 
     const hideC = {
         display: 'none',
 
     }
     const showC = {
         display: 'block',
         }
     const handleToggle = () => styler === 0 ? setstyle(1): setstyle(0)
     
 
    return (
        <>


<section id='mealist' >
<img src='https://media-cdn.tripadvisor.com/media/photo-s/05/09/93/51/jollof-cafe.jpg' alt='meals on sale' />
<article>
<strong>
    <p>
{mealName}
    </p>

</strong>
 
 <p>N{mealPrice}</p>

   <i className='fa fa-angle-down' onClick={handleToggle} ></i> 

</article>
 </section>

 <p className='mealC' style={styler === 0 ? hideC : showC}  >{mealContent}</p>
  
        </>
    )
}

export default MealsList