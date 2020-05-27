import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Results from '../Components/Results';
import Particles from 'react-particles-js';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
 
  
const FUTUREME = styled.main`
 
 
`
const BOARD = styled.article`
@media screen and (max-width: 48rem) {
    
    background: #ffffff17;
    margin-top: 5rem;
    height: auto;
    max-width: 100%;
    margin: 5rem 0 auto 0;
    
    padding: 1rem;
    border-top-right-radius: 3rem;
    border-top-left-radius: 3rem;
}
@media screen and (min-width: 48rem) {
    padding: 1rem;
    border-top-right-radius: 3rem;
    border-top-left-radius: 3rem;
        max-width: 75%;
    margin: 5rem auto 5rem auto;
    background: #ffffff33;
    height: auto;
    }
 `
const RESULT = styled.section`
@media screen and (min-width: 48rem) {

    width: 50%;
    margin: 0 auto 0 auto;
}
 `
const URL = styled.input`
padding: 1rem;
max-width: 100%;
align-self: center;
margin-top: 2rem;
font-size: large;
outline: none;
border: transparent;


& ~ & {
    &:hover {
        box-shadow: 0px 2px 1px black;
   
    }
    cursor: pointer;
    border: brown 2px solid;
    background: white;
    transition ease-in-out 1s;
    border-radius: .5rem;
    outline: none;
     font-weight: bold;
    -webkit-letter-spacing: .1rem;
    -moz-letter-spacing: .1rem;
    -ms-letter-spacing: .1rem;
    letter-spacing: .1rem;
}

&.Res {
    border-radius: 10%;
    display: block;
    border: none;
    box-shadow: none;
    background: white;
}
`
const FORM = styled.form`
@media screen and (max-width: 48rem) {

    justify-content: space-around;
    display: flex;
    // & input {
    //     margin-left: 1rem;
    // }
}
@media screen and (min-width: 48rem) {
    display: flex;
    justify-content: center;
& input {
    margin-left: 1rem;
}
}
`
const AVATAR = styled.img`
@media screen and (min-width: 48rem) {
    height: 10rem;
    width: 10rem;
 }
border-radius: 50%;
height: 7rem;
width: 7rem;
align-self: center;

margin-top: 1rem;
`
const AI = styled.div`
@media screen and (max-width: 48rem) {
display:none
}
`
const AIMOBILE = styled.div`
@media screen and (min-width: 48rem) {
display:none
}
`

const Main = () => {
    const[apiAI, setAI] = useState([])
    const[aiGen, setGen] = useState([])
    const[aiAge, setAge] = useState([])
    const[aiAbout, setAbout] = useState([])
    const[show, setShow] = useState('')
    const[imgUrl, setImg] = useState('')
    const[proc, setProc] = useState('')

     

    const handleSendAI = () => {
        if(imgUrl !== '') {
           setProc('Proce')
            setAI([])
            setGen([])
            setAge([])
            setAbout([])
            setShow([])
          try {
                const fetchData = async () => {
                    try {
                        let init = {
                            method:'post', 
                            body:JSON.stringify({img: imgUrl}), 
                            'headers':{'content-type':'application/json'},
                            mode:'cors'
                        }
                        let ans = await fetch(`https://stark-wildwood-09033.herokuapp.com/api/getData/`, init)
            
                            let AI =  await ans.json()
    
                            let err = 'It seems there more than one person in the Image, use a single person Image rather, thanks'
    
                            if(AI.length > 0) setAI(AI)
                            else throw err  
                     } 
                    catch (error) {
                        alert(error + '\n \n for now our system supports only single images, thanks.')
                       console.log(error) 
                    }
                    
               
        
                    }
                    fetchData() 
        
            }
             catch (error) {
                 alert('retry pls an error occured')
                console.log(error)
            }
        } else alert('no image url typed')
    }
    useEffect(() => {
        if(apiAI.length > 0) {

            let ageOnly = apiAI.filter(s => s.vocab_id === 'age_appearance').slice(0, 5)
            setAge(ageOnly)
            // console.log(ageOnly)

            let genOnly = apiAI.filter(s => s.vocab_id === 'gender_appearance').slice(0, 5)
            setGen(genOnly)
            // console.log(genOnly)

            let aboutOnly = apiAI.filter(s => s.vocab_id === 'multicultural_appearance').slice(0, 5)
            setAbout(aboutOnly)
            // console.log(aboutOnly)
            
           }
    }, [apiAI])

     return (
        <>
        <AI className="App" style={{width:'100%',height:'100vh', background:'white', position:'fixed', zIndex:'-4', paddingTop:'0rem'}}> 
       <Particles 
       height='100vh'
       width='100%'
        params={{
            "particles": {
              "number": {
                "value": 200,
                "density": {
                  "enable": true,
                  "value_area": 2000
                }
              },
              "color": {
                "value": "#32CD32"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#32CD32"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 5,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 80,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 300,
                "color": "#32CD32",
                "opacity": 0.4,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 12,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 800,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 800,
                  "size": 80,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 400,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }} 
      /> 
   
    </AI> 
 
        <AIMOBILE className="App" style={{width:'100%',height:'100vh', background:'white', position:'fixed', zIndex:'-4', paddingTop:'0rem'}}> 
       <Particles 
       height='100vh'
       width='100%'
        params={{
            "particles": {
              "number": {
                "value": 200,
                "density": {
                  "enable": true,
                  "value_area": 4500
                }
              },
              "color": {
                "value": "#32CD32"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#32CD32"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 5,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 80,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 300,
                "color": "#32CD32",
                "opacity": 0.4,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 12,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 800,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 800,
                  "size": 80,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 400,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }} 
      /> 
   
    </AIMOBILE> 
 
 
 <section style={{background:'#0000006b', height:'auto'}}>
     <figure style={{margin:'0', display:'flex', flexFlow:'column', justifyContent:'center'}}>

        <AVATAR 
        src={imgUrl !== '' ? imgUrl : require('./wealthme.jpg')} 
        alt='user pics'
         />
    <FORM onSubmit={e => e.preventDefault()}>
        <URL 
        type='text' 
        require={true} 
        placeholder='enter url to image' 
        onChange={e => setImg(e.target.value.trim())}  />

        <URL 
        type='submit' 
        require={true}
        onClick={handleSendAI} />

    </FORM>
     </figure>
         

<BOARD>
    <h2 style={{marginLeft:'1rem', marginTop:'3rem'}}>Know AI</h2>
    { apiAI.length < 1 ? 
    <section style={{background: 'white', display:'flex', flexFlow:'column', alignItems:'center', justifyContent:'center', height:'20rem'}}>

        <img src={require('../View/25.gif')} alt='confirming payment' style={{height: '3rem', width:'3rem'}} /> 
        <p>{imgUrl !== '' && proc !== '' ? 'Proccessing Image, pls wait' : 'Waiting for your image, thanks'}</p>
    </section>
    :  <RESULT>

    <URL type='button' value={'Age'} className='Res' onClick={() => setShow('age')} /> 
    <div style={show !== 'age' ? {display:'none'} : {display:'block'}}>

    {
        aiAge.length > 0 ? (
            aiAge.map(s =>  
                <Results perc={Number((s.value * 100).toFixed(0))} label='Age' res={s.name}  />
                // console.log((s.value * 100).toFixed(0));
            )
        )
         : ('')
    }
    </div>
      
    <URL type='button' value={'Gender'} className='Res' onClick={() => setShow('gender')} /> 
    <div style={show !== 'gender' ? {display:'none'} : {display:'block'}}>

    {
        aiGen.length > 0 ? (
            aiGen.map(s =>  
                <Results perc={Number((s.value * 100).toFixed(0))} label='Age' res={s.name}  />
                // console.log((s.value * 100).toFixed(0));
            )
        )
         : ('')
    }
    </div>
    <URL type='button' value={'About'} className='Res' onClick={() => setShow('about')} />
    <div style={show !== 'about' ? {display:'none'} : {display:'block'}}>
    {
        aiAbout.length > 0 ? (
            aiAbout.map(s =>  
                <Results perc={Number((s.value * 100).toFixed(0))} label='Age' res={s.name}  />
                // console.log((s.value * 100).toFixed(0));
            )
        )
         : ('')
    }
        </div> 
      
    
    </RESULT>  
  
        }
   
</BOARD>
            </section>

       
<footer style={{background:'white'}} >
 
        <blockquote style={{lineHeight: '3rem', textAlign:'center', padding:'3rem', width: '50%', margin:'0 auto 0 auto'}}>

        This Application is not a form of Religious Prophecy or Spiritual in anyway. It's only a set of mathematical functions called AI that predicts the Age and Origin of an IMAGE, thanks.
        <br />
        <img src={'https://avatars1.githubusercontent.com/u/45592976?s=460&u=802d6432996ae802e1ed2a882c99af51284a2d99&v=4'} alt='NC Armstrong' style={{height:'5rem', width:'5rem', borderRadius:'50%'}} />
        <br />
     
            <p style={{color:'black', fontWeight:'bolder', background:'brown', padding:'.5rem'}}>
            <i>
            - NC Armstrong

            </i>
            </p>
            <p style={{color:'black', fontWeight:'bolder', background:'brown', padding:'.5rem'}}> Software Engineer </p>
           <section style={{display:'flex', justifyContent:'space-evenly'}}>
             <a href='https://twitter.com/AI_Lift' target='_blank' rel="noopener noreferrer" style={{color:'blue'}}><TwitterIcon /></a>
             <a href='mailto:armstrong.ndukwe@gmail.com?subject = Feedback&body = Contact me"' target='_blank' rel="noopener noreferrer" style={{color:'red'}}>  <MailOutlineIcon /></a>
             
          
           </section>
        </blockquote>
        
        <br />
    <p style={{textAlign:'center', background:'black', padding:'1rem', color:'white'}}> All right reserved 2020 </p>
     
    
 
</footer>
        </>
      );
}
 
export default Main;