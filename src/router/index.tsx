import {useContext} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProjectOverview from '../pages/ProjectOverview';

const Routers = () => {
  
  return (
    <Router>
      <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/projectoverview" component={ProjectOverview} />
          <Route path="/" component={HomePage}/>
      </Switch>
    </Router>
  )
}

export default Routers;