import React from 'react'
import '../Components/CompoCss/LinkBtn.css'

function LinkBtn(props) {


    let styler;
     
    const stylerMain = {
        marginLeft: '52%',
         marginTop: '2rem',
        display: 'flex',
    flexFlow: 'wrap-reverse',
     outline: 'none',
    borderColor: '#66CC33',
    borderRadius: '.5rem',
    background: 'white',
    fontFamily: 'sans-serif',
    padding: '.7rem',
    fontWeight: '600',
    fontSize: 'medium',
     width: 'max-content',
    alignSelf: 'flex-start',
    transition: '1.5s',
     
     }
     const stylerConfirm = {
        marginLeft: '1.5rem',
        marginTop: '3rem',
         display: 'flex',
    flexFlow: 'wrap-reverse',
     outline: 'none',
    borderColor: '#66CC33',
    borderRadius: '.5rem',
    background: 'white',
    fontFamily: 'sans-serif',
    padding: '.7rem',
    fontWeight: '600',
    fontSize: 'medium',
     width: 'max-content',
    alignSelf: 'flex-start',
    transition: '1.5s',


      }
    const stylerAnimate = {
        marginLeft: '52%',
        marginTop: '2rem',
        background: 'lime',
        color: 'white',
        transition: 'cubic-bezier(0.215, 0.610, 0.355, 3) 1.5s',
        border: 'none',
        outline: 'none',
        padding: '.9rem',
        borderRadius: '.4rem',

        transform: 'translateX(10%)',
    }
    const stylerAnimateOrder = {
        marginTop: '3rem',
        marginRight: '1rem',
        background: 'lime',
        color: 'white',
        transition: 'cubic-bezier(0.215, 0.610, 0.355, 3) 2.5s',
        border: 'none',
        outline: 'none',
        transform: 'translateX(20%)',
        padding: '.7rem',
        fontWeight: '600'
    }
    const stylerAnimateMain = {
        marginLeft: '52%',
        marginTop: '1',
        background: 'lime',
        color: 'white',
        transition: '3.5s 3s        ',
        border: 'none',
        outline: 'none',
        transform: 'translateX(-10%)',
        padding: '.7rem',
        fontWeight: '600',
        display: 'flex',
        flexFlow: 'wrap-reverse',
         borderRadius: '0',
        fontFamily: 'sans-serif',
        fontSize: 'medium',
        width: 'max-content',
        alignSelf: 'flex-start',
        marginBottom: '0'
     

    }
     
    switch(props.title) {
        case 'Make request': styler = stylerMain
        break;
        case 'Order something': styler = stylerAnimateMain 
        break 
        case 'I agree, order now': styler = stylerConfirm
        break
        default:
    }
    switch(props.animateCheck) {
        case true: styler = stylerAnimate
        break;
        case false: styler = stylerMain
        break
        default: 
    }
    if(props.animate === true) {
        styler = stylerAnimateOrder
    } 
    // else if(props.animate === 'mainP') {
    //     styler = stylerAnimateMain

    // }  
     
     
    return(
        <>
        
<button name='Linkbtn' style={styler}>
{props.title}
</button> 
        </>
    )
}

export default LinkBtn