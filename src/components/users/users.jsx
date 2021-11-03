import React from "react";
import User from "./user/user";
import classes from "./users.module.css";

const Users = (props) => {

    let getResultContent = () => {
        let resultUsersContent = props.users.map(el => <User key={el.id} ava={el.photos.small} status={el.status} switchFollow={props.switchFollow} userId={el.id} userName={el.name} followed={el.followed}/>);
        return resultUsersContent;
    }

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pagination = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagination.push(i);
    }

    let resultPagination = pagination.map(el => {
        return <span className={props.currentPage === el ? classes.selectedPage : classes.simplePage} onClick={() => props.onPageChanged(el)} >{el}</span>;
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
            {getResultContent()}
        </div>
    )

}

export default Users;