import {useContext} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

const Routers = () => {
  
  return (
    <Router>
      <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={HomePage}/>
      </Switch>
    </Router>
  )
}

export default Routers;