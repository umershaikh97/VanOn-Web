const initialState = {
    data: [
        { name: 'Admin', email: 'admin@vanon.com', phone: '0348-9097792', cnic: '42101-452250053-5' },
        { name: 'Admin1', email: 'admin1@vanon.com', phone: '0321-2570252', cnic: '42101-42225553-5' },
        { name: 'Admin2', email: 'admin2@vanon.com', phone: '0333-2570262', cnic: '43401-42224543-2' },
        { name: 'Admin3', email: 'admin3@vanon.com', phone: '0312-3570252', cnic: '32610-42225553-1' },
    ]
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ADMIN_DATA':
            let temp = action.payload.data;
            return { ...state, data: temp };
        default:
            return state;
    }
}

export default adminReducer;