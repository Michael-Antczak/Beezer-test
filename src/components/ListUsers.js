import React from 'react';
import User from './User';
import './ListUsers.css';

class ListUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          searchTerm: ''
        }
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);        
    }

    handleSearchTermChange(e) {
        this.setState({
          searchTerm: e.target.value,
        });
    }

    render() {

        let users = this.props.users;
        let accounts = this.props.accounts;

        return (
            
            <div id="list-users">
                <h1>List of Users</h1> 
                <h1 className="search">
                    <input 
                        onChange={this.handleSearchTermChange} 
                        value={this.state.searchTerm} 
                        type="text" 
                        placeholder="Search..." 
                    />
                </h1>
                <ul id="user-list">

                    {users
                        .filter(user => (user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) )
                        .map((user) => <User key={user.id} user={user} accounts={accounts}/> )
                    }

                </ul>
            </div>
            
        );
    }
    
}

export default ListUsers;
