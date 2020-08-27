import React from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Institutions from './pages/Institutions';
import Laboratories from './pages/Laboratories';
import {RegistInstitution} from './pages/RegistInstitution';
import {RegistLaboratory} from './pages/RegistLaboratory';
import FAQ from './pages/FAQ';
import RecoverPass from './pages/RecoverPass';
import Prevention from './pages/Prevention';
import BlogGrid from './pages/BlogGrid';
import BlogSidebar from './pages/BlogSidebar';
import BlogDetails from './pages/BlogDetails';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Error from './pages/Error';

function App() {
  return (
    <React.Fragment>
      <Route>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/about" component={About} />
          <Route path="/institutions" component={Institutions} />
          <Route path="/laboratories" component={Laboratories} />
          <Route path="/register-institution" component={RegistInstitution} />
          <Route path="/register-laboratory" component={RegistLaboratory} />
          <Route path="/faq" component={FAQ} />
          <Route path="/recover-pass" component={RecoverPass} />
          <Route path="/prevention" component={Prevention} />
          <Route path="/blog-grid" component={BlogGrid} />
          <Route path="/blog-sidebar" component={BlogSidebar} />
          <Route path="/blog-details" component={BlogDetails} />
          <Route path="/login" component={Login} />
          <Route path="/signin" component={SignUp} />
          <Route component={Error} />
        </Switch>
      </Route>
    </React.Fragment>
  );
}

export default App;
