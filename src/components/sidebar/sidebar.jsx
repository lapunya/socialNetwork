import FriendsContainer from "./friends/friends-container";
import Nav from "./nav/nav";
import classes from "./sidebar.module.css"

const Sidebar = (props) => {
    return (
        <div className={classes.sidebar}>
            <Nav/>
            <FriendsContainer/>
        </div>
    );
};

export default Sidebar;