import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Search from "./pages/search"
function App() {
  return (
     <Router>
       <Route exact path = "/">
        <Search></Search>
       </Route>
     </Router>
  
  );
}

export default App;
