export default (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
            return state = action.user
        case 'LOGOUT':
            return {};
        case 'CREATE_USER':
            state = action.user
        default:
            return state;
    }
}