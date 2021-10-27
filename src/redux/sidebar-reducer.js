let initialState = {
    friendsData: [
        { id: 1, friendName: 'Rachel', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeIuKElSOTid6MF787c7UTMwFPgQa7oF1ew&usqp=CAU' },
        { id: 2, friendName: 'Monica', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeIuKElSOTid6MF787c7UTMwFPgQa7oF1ew&usqp=CAU' },
        { id: 3, friendName: 'Phibi', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeIuKElSOTid6MF787c7UTMwFPgQa7oF1ew&usqp=CAU' }
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;