import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import Search from './component/users/Search';
import Alert from './component/layout/Alert';
import User from './component/users/User';
import About from './component/pages/About';
import axios from 'axios';
import GithubState from './context/github/GithubState';
import './App.css';

const App = () => {
  const [users, setusers] = useState([]);
  const [user, setuser] = useState({});
  const [userRepos, setuserRepos] = useState([]);
  const [loading, setloading] = useState(false);
  const [alert, setalert] = useState(null);


  const getUserRepos = async (username) => {
    setloading(true);
    const res = await axios.get(`http://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setuserRepos(res.data);
    setloading(false);
  }


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
              <Route
                exact path='/about'
                render={() => (
                  <About />
                )}
              />
              <Route exact path='/user/:login' render={props => (
                <User {...props} getUserRepos={getUserRepos} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );

}


export default App;
