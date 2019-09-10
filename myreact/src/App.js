import React from 'react';
import {HashRouter,Route,Switch,Redirect} from "react-router-dom"
import './App.css';
import Home from "./component/home"
import Deltail from "./component/detail"
import Collert from "./component/collert"

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path="/home" component={Home}></Route>
        <Route path="/deltail/:id" component={Deltail}></Route>
        <Route path="/collert" component={Collert}></Route>
        <Redirect from="/" to="/home/my"></Redirect>
      </HashRouter>
    </div>
  );
}

export default App;
