import React from 'react'
import '../Components/CompoCss/SearchBtn.css'


function SearchBtn(props) {
    let placeHo;
    switch(props.pHolder) {
        default: placeHo = 'Search meal or seller'
        break
        case 'your market name(popular, aka)': placeHo = 'your market name(popular, aka)'
        break
        case 'place / region': placeHo = 'place / region'
    }

    const handleAll = ({target}) => {
        if(props.regionFunc) {
            return props.regionFunc(target.value)
        }

        }
      
    return (
        <>
 <input type='text' placeholder={placeHo} id='sBtn' onChange={handleAll} />  
     <i className='fa fa-send-o' style={{display: placeHo === 'Search meal or seller' ? 'block' : 'none', marginBottom: '1rem', marginLeft: '1rem'}} ></i> 
        </>
    )
}

export default SearchBtn