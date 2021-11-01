import * as axios from "axios";
import React from "react";
import User from "./user/user";
import classes from "./users.module.css";

class Users extends React.Component {

    componentDidMount() {
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.getPagesCount(response.data.totalCount);
            // this.props.getUserLimit(response.data.pageSize);
        })
            
    }

    onPageChanged = (el) => {
        this.props.setCurrentPage(el);
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            // this.props.getUserLimit(response.data.pageSize);
        })
    }

    getResultContent() {
        let resultUsersContent = this.props.users.map(el => <User key={el.id} ava={el.photos.small} status={el.status} switchFollow={this.props.switchFollow} userId={el.id} userName={el.name} followed={el.followed}/>);
        return resultUsersContent;
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);

        let pagination = [];
        for (let i = 1; i <= pagesCount; i++) {
            pagination.push(i);
        }

        let resultPagination = pagination.map(el => {
            return <span className={this.props.currentPage === el ? classes.selectedPage : classes.simplePage} onClick={() => this.onPageChanged(el)} >{el}</span>;
        })

        return (
            <div className={classes.users}>
                {/* <div>
                    <button onClick={this.setPagesLimit} value='10'>10</button>
                    <button onClick={this.setPagesLimit} value='50'>50</button>
                    <button onClick={this.setPagesLimit} value='100'>100</button>
                </div> */}
                <div>
                {resultPagination}
                </div>
                {this.getResultContent()}
            </div>
        )
    }
}

export default Users;