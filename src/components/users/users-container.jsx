import React from "react";
import { connect } from "react-redux";
import { toggleAC, setUsersAC } from "../../redux/users-reducer";
import Users from "./users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        switchFollow: (userId) => {
            dispatch(toggleAC(userId));
        },
        
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;