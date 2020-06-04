import React from 'react';
import {Switch, Router, Route} from 'react-router-dom'
import { createBrowserHistory } from "history";
 import TestPack from './NpmCounterPack/TestPack';
// import CounterModule from './NpmCounterPack/CounterModule';
   
 

 
 


function App() {
  return (
      <>
      
        <Router history={createBrowserHistory()} >
         
        <Switch>
 
 
       {/* <Route exact path='/npmPackage' component={CounterModule} />   */}
      <Route exact path='/npmTest' component={TestPack} />  
       
        </Switch>
        </Router>
      
      



      </>
  );
}
 
export default App;
