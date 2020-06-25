import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Facilities from './pages/Facilities';
import BookSlot from './pages/BookSlot';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/facilities" component={Facilities} />
        <Route exact path="/facility/:book/:id" component={BookSlot}/>
      </Switch>
    </div>
  );
}

export default App;
