import React from 'react'
import pcObj from '../TestDb/paragContens'

function ParagraphCards(props) {
  

    const [{main},] = React.useState(pcObj)

 
    const stylesP = {
        lineHeight: '2rem',
        padding: '1rem'
    }
 
    return (
        <>

 <p style={stylesP} >
     {main}
 </p>
        </>
    )
}

export default ParagraphCards