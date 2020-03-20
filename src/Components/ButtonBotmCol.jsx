import React from 'react'
import '../Components/CompoCss/ButtonBotmCol.css'
function ButtonBotmCol(props) {
    const styles = {
        color: 'black',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderBottomColor: `${props.choiceColor}`,
        background: 'transparent',
        paddingBottom: '.5rem',
        margin: '1rem auto auto 1rem',
        fontWeight: 'bold'
    }
    return(
        <>
<button style={styles}>
    {props.title}
</button>



        </>
    )
}

export default ButtonBotmCol