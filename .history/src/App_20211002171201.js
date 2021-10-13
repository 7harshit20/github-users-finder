import './App.css';
import React, { Component } from 'react';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import Search from './component/users/Search';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  // Search github user
  searchUsers = async (text) => {
    this.setState({ loading: true });

    // const res = await fetch(`http://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // const data = await res.json();
    // this.setState({ users: data.items, loading: false });

    const res = await axios.get(`http://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ loading: false, users: res.data.items })
  };

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
    const name = "Github Finder";
    const { loading, users } = this.state;
    return (
      <div className="App">
        <Navbar title={name} />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );

  }
}

export default App;
