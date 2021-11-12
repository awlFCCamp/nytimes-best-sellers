import React from 'react';
//import Books from './Books'
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Nonfiction from './Nonfiction';
import Children from './Children';
import Youngadult from './Youngadult';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

/*const App =()=>{
    return (
        <div>
        <Books/>
        
        </div>
    )
}*/

function App(){
    return (
        <Router>
            <div className='App'>
                <Nav/>
                <Switch>
                    <Route path = '/' exact component = {Home} />
                    <Route path = '/nonfiction' component = {Nonfiction} />
                    <Route path = '/children' exact component = {Children} />
                    <Route path = '/youngadult' exact component = {Youngadult} />
                </Switch>
            </div>
        </Router>
    )
}


export default App
