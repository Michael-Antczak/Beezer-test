import React from 'react';
import './User.css';
import AppsView from './AppsView';
const User = (props) => {

    let user = props.user;
    let accounts = props.accounts;

    return (
        <div className="user-data">
            <h2>Name: {user.name}</h2>
            <h4>User id: {user.id}</h4>
            <h4>User account: {user.account}</h4>
           
            <AppsView accounts={accounts}/>
       </div>
    )
   
};

export default User;
