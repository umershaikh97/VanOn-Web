const initialState = {
    projects: []
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create project start')
            return state;
        default:
            return state;
    }
}

export default projectReducer;