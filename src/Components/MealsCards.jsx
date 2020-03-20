import React, {useState} from 'react'
import MealsList from './MealsList.jsx'
import mealsObj from '../TestDb/mealsDb'
import LinkBtn from './LinkBtn.jsx';
import SellerBanner from './SellerBanner.jsx';
import {Link} from 'react-router-dom'
  
function MealsCards(props) {
    const[{name, image, meal_list },] = useState(mealsObj)
  
   
      
     
     
    
     return(
        <>
     
<SellerBanner image={image} name={name} />

 <MealsList {...meal_list} />
<MealsList {...meal_list} />
<MealsList {...meal_list} />
  

<Link to='/order'>
<LinkBtn title='Order something'   />
</Link>
 

<hr style={{marginTop: '3rem'}} />
 

        </>
    )
}

export default MealsCards