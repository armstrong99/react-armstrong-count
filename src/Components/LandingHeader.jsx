import React  from 'react';
import './CompoCss/LandingHeader.css'
import AnimateLogo from './AnimateLogo';


function LandingHeader() {
    

     return( 
         <>
<header id='landingHead' >
    <nav>
        <ul id='landingHeader' >
            <li><i className='fas fa-hamburger'></i> </li>
            <li>Ndukwe</li>
        </ul>
        <h1> <AnimateLogo choiceColor='white' /> </h1>
    </nav>
</header>

         </>
     )
}

export default LandingHeader