import React from 'react';

const ListUsers = (props) => {

    const users = props.users;

    return (

        <div id="list-users">
            <h1>List of Users</h1> 
            <ul>
                {
                    users.map((user) => {
                        return (
                            <li key={user.id}>{user.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ListUsers;
