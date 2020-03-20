import React from 'react';
import Main from './Views/Main.jsx'
import OrderMeal from './Views/OrderMeal.jsx';
import {Switch, Router, Route} from 'react-router-dom'
import { createBrowserHistory } from "history";
import Request from './Views/Request.jsx';
import ReqSuccess from './Views/ReqSuccess.jsx';
import BecomeASeller from './Views/BecomeASeller.jsx';

 
 


function App() {
  return (
      <>
      
        <Router history={createBrowserHistory()} >
         
        <Switch>
 
 
 <Route  path='/home' component={Main} />

 <Route exact path='/order' component={OrderMeal} />

 <Route exact path='/request' component={Request} />

 <Route exact path='/ordernow' component={ReqSuccess} />

 <Route path='/becomeseller' component={BecomeASeller} />
       
        </Switch>
        </Router>
      
      



      </>
  );
}
 
export default App;
