import React from 'react'
import '../Components/CompoCss/SellerBanner.css'

function SellerBanner(props) {
    return(
        <>
         <figure>

<img src='https://img-global.cpcdn.com/recipes/ec6e34c0848b6679/751x532cq70/fried-rice-chicken-and-salad-recipe-main-photo.jpg' 
alt='resturant logo or banner' />

<figcaption>

    {props.name}

</figcaption>

</figure>
        </>
    )
}

export default SellerBanner