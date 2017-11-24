import React from 'react';
import User from './User';

const ListUsers = (props) => {

    const users = props.users;
    const accounts = props.accounts;

    return (

        <div id="list-users">
            <h1>List of Users</h1> 
            <ul>
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

// function findAccount(accounts, account_id) {
//     var account = accounts.find((acc, index, obj) => {
//         // console.log(`Number ${index} - ${acc}`);
//         return acc.account_id === user.account;
//     })
//     return account;
// }

export default ListUsers;
