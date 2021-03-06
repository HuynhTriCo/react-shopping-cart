import React,{Component} from "react";
import "./App.css";
import Navbar from "./component/NavBar"
import Home from "./component/Home"
import Cart from "./component/Cart"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SearchBar from "./component/searchBar"
class App extends Component {
  render() {
    return (
       <BrowserRouter>
       
            <div className="App">
            
              <Navbar/>
              <SearchBar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
