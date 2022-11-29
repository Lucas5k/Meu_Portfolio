import { Switch, Route } from 'react-router-dom';
import ContactPage from '../Pages/ContactPage';
import ProjectPage from '../Pages/ProjectPage';
import HomePage from '../Pages/HomePage';

function PagesRouter() {
  return (
    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route path="/Contact" component={ ContactPage } />
      <Route path="/Projects" component={ ProjectPage } />
    </Switch>
  );
}

export default PagesRouter