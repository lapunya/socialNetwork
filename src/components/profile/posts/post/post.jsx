import classes from './post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lXdNqBkPOVpU_tHfrbGsQAuE6wgNQ9D40w&usqp=CAU' />
            {props.message}  {/*передаем в фигурных скобках, так как это внутри jsx, js свойство message, которое подкачивается из атрибута тега Post*/}
            <div>
                <span>{props.likeCount} Like</span>
            </div>
        </div>
    );
};

export default Post;