const initialState = {
    projects: []
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            return state;
        default:
            return state;
    }
}

export default projectReducer;