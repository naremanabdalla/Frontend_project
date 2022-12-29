import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import homepage_map from './components/home_page/homepage_map'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Contact_us from './components/About_Contact_pages/Contact_us/Contact_us'
import About_us from './components/About_Contact_pages/About_us/About_us';
import BookCard from './components/bookpage/BookCard';
import CardsPage from './components/bookpage/CardsPage';
import ScientificDetail from './components/bookpage/scientificDetail';
import Scientific from './components/bookpage/scientificPage';
import Historical from './components/bookpage/historicalPage';
import Languages from './components/bookpage/languagesPage';
import page2 from './components/About_Contact_pages/page2/page2'
import page3 from './components/About_Contact_pages/page3/page3';
import page6 from './components/About_Contact_pages/page6/page6';
import profile from './components/About_Contact_pages/profile/profile';
import p1 from './components/bookpage/pages/p1';
import p2 from './components/bookpage/pages/p2';
import p3 from './components/bookpage/pages/p3';
import p4 from './components/bookpage/pages/p4';
import p5 from './components/bookpage/pages/p5';
import p6 from './components/bookpage/pages/p6';
import p1_1 from './components/About_Contact_pages/page2/p1_1';
import p2_1 from './components/About_Contact_pages/page2/p2_1';
import p3_1 from './components/About_Contact_pages/page2/p3_1';
import p4_1 from './components/About_Contact_pages/page2/p4_1';
import p5_1 from './components/About_Contact_pages/page2/p5_1';
import p6_1 from './components/About_Contact_pages/page2/p6_1';

import p1_2 from './components/About_Contact_pages/page3/p1_2';
import p2_2 from './components/About_Contact_pages/page3/p2_2';
import p3_2 from './components/About_Contact_pages/page3/p3_2';
import p4_2 from './components/About_Contact_pages/page3/p4_2';
import p5_2 from './components/About_Contact_pages/page3/p5_2';
import p6_2 from './components/About_Contact_pages/page3/p6_2';

import p1_3 from './components/About_Contact_pages/page6/p1_3';
import p2_3 from './components/About_Contact_pages/page6/p2_3';
import p3_3 from './components/About_Contact_pages/page6/p3_3';
import p4_3 from './components/About_Contact_pages/page6/p4_3';
import p5_3 from './components/About_Contact_pages/page6/p5_3';
import p6_3 from './components/About_Contact_pages/page6/p6_3';

import p7 from './components/bookpage/pages/p7';
import p8 from './components/bookpage/pages/p8';
import p9 from './components/bookpage/pages/p9';
import p10 from './components/bookpage/pages/p10';
import p11 from './components/bookpage/pages/p11';
import p12 from './components/bookpage/pages/p12';
import p13 from './components/bookpage/pages/p13';
import p14 from './components/bookpage/pages/p14';
import p15 from './components/bookpage/pages/p15';
import p16 from './components/bookpage/pages/p16';
import p17 from './components/bookpage/pages/p17';
import p18 from './components/bookpage/pages/p18';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={homepage_map} />
        <Route path={ROUTES.homepage_map} component={homepage_map} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.Contact_us} component={Contact_us} />
        <Route path={ROUTES.About_us} component={About_us} />
        <Route path={ROUTES.BookCard} component={BookCard} />
        <Route path={ROUTES.CardsPage} component={CardsPage} />
        <Route path={ROUTES.Scientific} component={Scientific} />
        <Route path={ROUTES.Historical} component={Historical} />
        <Route path={ROUTES.Languages} component={Languages} />
        <Route path={ROUTES.page2} component={page2} />
        <Route path={ROUTES.page3} component={page3} />
        <Route path={ROUTES.page6} component={page6} />
        <Route path={ROUTES.profile} component={profile} />
        <Route path={ROUTES.ScientificDetail} component={ScientificDetail} />
        <Route path={ROUTES.p1} component={p1} />
        <Route path={ROUTES.p2} component={p2} />
        <Route path={ROUTES.p3} component={p3} />
        <Route path={ROUTES.p4} component={p4} />
        <Route path={ROUTES.p5} component={p5} />
        <Route path={ROUTES.p6} component={p6} />
        <Route path={ROUTES.p1_1} component={p1_1} />
        <Route path={ROUTES.p2_1} component={p2_1} />
        <Route path={ROUTES.p3_1} component={p3_1} />
        <Route path={ROUTES.p4_1} component={p4_1} />
        <Route path={ROUTES.p5_1} component={p5_1} />
        <Route path={ROUTES.p6_1} component={p6_1} />

        <Route path={ROUTES.p1_2} component={p1_2} />
        <Route path={ROUTES.p2_2} component={p2_2} />
        <Route path={ROUTES.p3_2} component={p3_2} />
        <Route path={ROUTES.p4_2} component={p4_2} />
        <Route path={ROUTES.p5_2} component={p5_2} />
        <Route path={ROUTES.p6_2} component={p6_2} />

        <Route path={ROUTES.p1_3} component={p1_3} />
        <Route path={ROUTES.p2_3} component={p2_3} />
        <Route path={ROUTES.p3_3} component={p3_3} />
        <Route path={ROUTES.p4_3} component={p4_3} />
        <Route path={ROUTES.p5_3} component={p5_3} />
        <Route path={ROUTES.p6_3} component={p6_3} />

        <Route path={ROUTES.p7} component={p7} />
        <Route path={ROUTES.p8} component={p8} />
        <Route path={ROUTES.p9} component={p9} />
        <Route path={ROUTES.p10} component={p10} />
        <Route path={ROUTES.p11} component={p11} />
        <Route path={ROUTES.p12} component={p12} />
        <Route path={ROUTES.p13} component={p13} />
        <Route path={ROUTES.p14} component={p14} />
        <Route path={ROUTES.p15} component={p15} />
        <Route path={ROUTES.p16} component={p16} />
        <Route path={ROUTES.p17} component={p17} />
        <Route path={ROUTES.p18} component={p18} />


      </Switch>

    </Router>

  );
}

export default App;
