export const loginUser = (user) => ({
    type: 'LOGIN',
    user
});

export const startLogin = (body) => {
    return (dispatch) => {
        dispatch(loginUser(body))
    }
}

export const createUser = (user) => ({
    type: 'CREATE_USER', 
    user
})

export const startCreateUser = (body) => {
    return (dispatch) => {
        dispatch(createUser(body));
    }
}

export const LogoutUser = () => ({
    type: 'LOGOUT'
})