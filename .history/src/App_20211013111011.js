import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import Search from './component/users/Search';
import Alert from './component/layout/Alert';
import 
import About from './component/pages/About';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }

  searchUsers = async (text) => {
    this.setState({ loading: true });

    // const res = await fetch(`http://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // const data = await res.json();
    // this.setState({ users: data.items, loading: false });
    const res = await axios.get(`http://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ loading: false, user: res.data });
  };

  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`http://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  }

  clearUsers = () => {
    this.setState({ users: [] })
  }

  setAlert = (message, background) => {
    this.setState({ alert: { msg: message, type: background } });
    setTimeout(() => this.setState({ alert: null }), 3000)
  }

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await fetch(`http://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   const data = await res.json();

  //   this.setState({ users: data, loading: false });
  // }



  render() {
    // const name = "Someone";
    // const load = false;
    // const showName = true;
    // if (!showName && !load) {
    //   return (
    //     <h1>Changes successful</h1>
    //   )
    // }
    // return (
    //   <div className="App" >
    //     {load ? <h4>Loading...</h4> : <h1>{name}'s Changes successful</h1>}
    //   </div>
    //   // <Fragment>
    //   //   <h1>Hello again</h1>
    //   // </Fragment>
    // );
    const { loading, users, alert } = this.state;
    const name = "Github Finder";

    return (
      <Router>
        <div className="App">
          <Navbar title={name} />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' render={() => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    setAlert={this.setAlert}
                    showClear={users.length > 0 ? true : false}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
              />
              <Route
                exact path='/about'
                render={() => (
                  <About />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );

  }
}

export default App;
