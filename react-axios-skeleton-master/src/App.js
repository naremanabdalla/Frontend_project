import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import * as ROUTES from './constants/routes';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CardsPage from "./components/bookpage/CardsPage"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={SignIn} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.CardsPage} component={CardsPage} />
      </Switch>
      
    </Router>
    
  );
}

export default App;
