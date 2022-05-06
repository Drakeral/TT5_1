import {useContext} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProjectIndividual from '../pages/ProjectIndividual';
import ProjectOverview from '../pages/ProjectOverview';
import ProfilePage from '../pages/ProjectOverviewV2';

const Routers = () => {
  
  return (
    <Router>
      <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/projectoverview" component={ProjectOverview} />
          <Route path="/profile" component={ProfilePage} />
          {/* <Route path="/projectindividual" component={ProjectIndividual} /> */}
          <Route path="/" component={HomePage}/>
      </Switch>
    </Router>
  )
}

export default Routers;