# react-armstrong-count


# Demo

![Demo](Demo/demo.png?raw=true "Demo Image")

# Get Started

This is a light-weight and easy-to-use module created for React developers to solve the pains of debugging and setting up counters for their applications

## Installation

```bash
npm install react-armstrong-count
```
or with yarn

```bash
yarn add react-armstrong-count
```

## Usage

```javascript
import React, { useState } from 'react';
import Armstrong from 'react-armstrong-count';

const TestPack = () => {

  const[val, setVal] = useState('')
  const[sBol, setBol] = useState('')

  const getCount = c => setVal(c)
 const handleSBol = () => setBol('start')

    return (

        <>

         <Armstrong inter={1000} startBol={sBol} stopTime={10} getCount={getCount} iValue={5}>

        <section style={{display:'flex',height:'100vh',alignItems:'center',justifyContent:'center', flexFlow:'column', background:'#c0c0c000'}}>


                    <h1>{val}</h1>

                        <div style={{
                            background:'red',
                            width:`${val}rem`, 
                            textAlign:'center',
                            padding: '1rem',
                            color: 'white',

                        }}>
                            { Number(val) * 2 }
                    
                        </div>

                    <button style={{
                        padding: '2rem',
                        marginTop: '3rem',
                        background: 'limegreen',
                        color: 'white',
                        border: 'none',
                        outline: 'none',
                        borderRadius: '3rem',
                        width: '10rem',
                        fontSize: '1.45rem',
                     }} onClick={handleSBol}>Start</button>   
    </section>
        
 </Armstrong>

        </>

    );
}
 
export default TestPack;

```
## Props 

### inter: 
This number value represents the Interval of the counter, it takes single values like 1 for One second, 2 for Two seconds etc

### startBol: 
 This prop must recieve a String value of 'start' for the counter to start

### stopTime: 
 This prop recieves a number value, which is the value at which the counter stops

### getCount:
 This props takes a callback function, which recieves the count value(s) and can be safely used to setState(or useState) in the concerned Component

### iValue: 
 This is the initial value the counter should start, if not Specified is default to Zero(0)

# Contribution

1. [Fork it!](https://github.com/armstrong99/react-armstrong-count)

2. Create your feature branch: git checkout -b feature-name

3. Commit your changes: git commit -am 'Some commit message'

4. Push to the branch: git push origin feature-name

5. Submit a pull request 😉😉

# How Can I Thank You ?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or Any Social Media? And talk about it within your friends and event or workshop ? Spread the word!

Dont forget to [follow me on Twitter ](https://twitter.com/AI_Lift)

Thanks! NC Armstrong

# License

This project is licensed under the MIT License





 