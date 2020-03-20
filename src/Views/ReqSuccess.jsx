import React, { useEffect } from 'react'
import MainHeader from '../Components/MainHeader';

function ReqSuccess() {
    useEffect(() => {
        document.title = 'Request successfull'
        sessionStorage.clear()
    })
    return(
        <>
<MainHeader backRoute='/home' />
<img src='' alt='Request sent successfully' />

<p>
    Request sent, enjoy your meal! <i className=''>Emoji</i>
</p>


        </>
    )
}

export default ReqSuccess