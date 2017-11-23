import React, { Component } from 'react';
import './App.css';
import firebase from './config/firebase.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [], 
      accounts: [],
    }
  }

  componentDidMount() {

    // Get a reference to the database service
    const database = firebase.database();

    // fetch users
    let users = database.ref('users/');
    users.on('value', (snapshot) => {
      console.log(snapshot.val());
      this.setState({
        users: snapshot.val()
      });
    });

    // fetch accounts
    let accounts = database.ref('accounts/');
    accounts.on('value', (s) => {
      console.log(s.val());
      this.setState({
        accounts: s.val()
      });
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Beezer</h1>
        </header>
      </div>
    );
  }
}

export default App;
