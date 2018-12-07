import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import SignIn from './SignIn';
import Home from './Home';
import Friends from './Friends';
import Shows from './Shows';

function App() {
  return (
    <div>
      <style global jsx>{`
        color: 
        background-color: black;

      `}</style>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route path='/home' component={Home} />
        <Route path='/friends' component={Friends} />
        <Route path='/shows' component={Shows} />
      </Switch>
    </div>
  );
}

export default App;
