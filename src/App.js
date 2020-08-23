import React from 'react';
import './App.css';
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
        <Router>
            <Switch>
                <Route path='/search'>
                    <SearchResult/>
                </Route>
                <Route path='/'>
                    <Home/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
