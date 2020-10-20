import React from "react";
import Header1 from "./Header";
import Home from "./Home";
import Portfolio from "./Protfolio";
import Clients from "./Clients";
import Touch from "./Touch";

import {BrowserRouter,Switch,Route} from "react-router-dom";

function App() {
  return (
    
    <>
   
    <BrowserRouter>
    
          <Header1/> 
           <Switch>
        <Route  path="/Home" exact component={Home} />
        <Route path="/Portfolio" exact component={Portfolio} />
        <Route path="/Clients" exact component={Clients}/>
       <Route path="/Touch" exact component={Touch}/>
               
      </Switch>
    </BrowserRouter>
    
      </>
  );
}
export default App;