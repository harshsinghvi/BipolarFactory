import React, {useCallback} from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Facilities from './pages/Facilities';
import BookSlot from './pages/BookSlot';

function App() {
  const userState = useSelector(state => state.userReducer);
  return (
    <div>
      <Switch>
        {userState.userActive === null &&
          
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </>
        }
        <Route exact path="/facilities" component={Facilities} />
        <Route exact path="/facility/:book/:id" component={BookSlot} />
        {userState.userActive &&
          <Redirect to="/facilities" />
        }
      
      </Switch>
    </div>
  );
}

export default App;
