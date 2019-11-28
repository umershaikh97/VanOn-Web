const initialState = {
    isAuthenticated: false,
    role: '',
    username: '',
    password: '',
    loginError: '',
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            if (action.payload.username === 'admin' && action.payload.password === '123456') {
                return { ...state, role: 'admin', isAuthenticated: true, username: 'admin', password: '12345' }
            }
            else if (action.payload.username === 'vendor' && action.payload.password === '123456') {
                return { ...state, role: 'vendor', isAuthenticated: true, username: 'vendor', password: '12345' }
            }
            else {
                return { ...state, loginError: 'Invalid Username or Password' }
            }
        case 'LOGOUT':
            return { ...state, isAuthenticated: false }
        case 'CLEAR_AUTH_REDUCER':
            return { ...state, loginError: '' }
        default:
            return { ...state }
    }
}

export default authReducer;