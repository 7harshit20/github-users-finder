import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import Search from './component/users/Search';
import Alert from './component/layout/Alert';
import User from './component/users/User';
import About from './component/pages/About';
import GithubState from './context/github/GithubState';
import './App.css';

const App = () => {
  const [alert, setalert] = useState(null);


  const setAlert = (message, background) => {
    setalert({ msg: message, type: background });
    setTimeout(() => setalert(null), 3000);
  }

  const name = "Github Finder";

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title={name} />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' render={() => (
                <Fragment>
                  <Search
                    setAlert={setAlert}
                  />
                  <Users />
                </Fragment>
              )}
              />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );

}


export default App;