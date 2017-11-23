import React, { Component } from 'react';
import './App.css';
import firebase from './config/firebase.js';
import ListUsers from './components/ListUsers.js'

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

    // fetch users from Firebase
    const users = database.ref('users');

    // this sets an event on change in Firebase, so 
    // will be updated automagically when there is 
    // an update in Firebase
    users.on('value', (snapshot) => {

      // convert Firebase object into an Array and add to state
      const allUsers = snapshot.val();
      let newState = [];

      for(let user_id in allUsers) {
        newState.push({
          id: user_id,
          name: allUsers[user_id].name,
          account: allUsers[user_id].account,
        });
        // DEBUG ONLY console.log(`ID: ${user_id}, NAME: ${allUsers[user_id].name}`)
      }
 
      this.setState({
        users: newState
      });
    });
  }
  
  render() {

    const message = (!this.state.users) ? "Loading..." : <ListUsers users={this.state.users} />
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Beezer admin panel</h1>
        </header>
          
          {message}

      </div>
    );
  }
}

export default App;
