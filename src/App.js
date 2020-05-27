import React from 'react';
import {Switch, Router, Route} from 'react-router-dom'
import { createBrowserHistory } from "history";
import Main from './FutureMe/View/Main';
  
 

 
 


function App() {
  return (
      <>
      
        <Router history={createBrowserHistory()} >
         
        <Switch>
 
 
      <Route exact path='/' component={Main} />  
       
        </Switch>
        </Router>
      
      



      </>
  );
}
 
export default App;
