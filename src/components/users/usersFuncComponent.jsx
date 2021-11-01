import * as axios from "axios";
import React from "react";
import User from "./user/user";
import classes from "./users.module.css";

const Users = (props) => {

 // let usersData = [
        //     {id: 1, userName: 'Leonardo', ava: 'https://avatarko.ru/img/kartinka/27/TMNT_Leonardo_26716.jpg', status: 'blue', location: {city: 'Turin', country: 'Italy'}, followed: true},
        //     {id: 2, userName: 'Donatello', ava: 'https://avatarko.ru/img/kartinka/27/TMNT_Donatello_26726.jpg', status: 'purple', location: {city: 'Turin', country: 'Italy'}, followed: true},
        //     {id: 3, userName: 'Michelangelo', ava: 'https://avatarko.ru/img/kartinka/27/TMNT_Michelangelo_26682.jpg', status: 'orange', location: {city: 'Turin', country: 'Italy'}, followed: false},
        //     {id: 4, userName: 'Raphael', ava: 'https://avatarko.ru/img/kartinka/27/TMNT_Raphael_26697.jpg', status: 'red', location: {city: 'Turin', country: 'Italy'}, followed: false}
        // ];

    let getUsers = () => {
        if (props.users.length === 0) {
            axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => props.setUsers(response.data.items));
         }
    }

    let resultUsersContent = props.users.map(el => <User key={el.id} ava={el.photos.small} status={el.status} switchFollow={props.switchFollow} userId={el.id} userName={el.name} followed={el.followed}/>)

    return (
            <div className={classes.users}>
                <button onClick={getUsers}>Get Users</button>
                {resultUsersContent}
            </div>
    )
}

export default Users;