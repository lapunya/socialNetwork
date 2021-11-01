import React from "react";
import { connect } from "react-redux";
import { toggleAC, setUsersAC, getPagesCountsAC, getUserLimitAC, setCurrentPageAC } from "../../redux/users-reducer";
import Users from "./users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        switchFollow: (userId) => {
            dispatch(toggleAC(userId));
        },
        
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },

        getPagesCount: (pagesCount) => {
            dispatch(getPagesCountsAC(pagesCount));
        },

        getUserLimit: (limit) => {
            dispatch(getUserLimitAC(limit));
        },
        
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        }

    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;