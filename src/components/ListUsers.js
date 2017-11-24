import React from 'react';
import User from './User';
import './ListUsers.css';

const ListUsers = (props) => {

    const users = props.users;
    const accounts = props.accounts;

    return (

        <div id="list-users">
            <h1>List of Users</h1> 
            <ul id="user-list">
                {
                    users.map((user) => {

                        return (
                            <User key={user.id} user={user} accounts={accounts}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ListUsers;
