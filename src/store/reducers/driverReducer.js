const initialState = {
    data: [
        { name: 'Driver1', email: 'driver1@vanon.com', phone: 123, cnic: 614144443, license: 614144443, van: 'BBW-2345', area: 'Gulshan', v_id: '1' },
        { name: 'Driver2', email: 'driver2@vanon.com', phone: 123, cnic: 614144443, license: 614144443, van: 'BBW-2345', area: 'Johar', v_id: '2' },
    ]
}

const driverReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_DRIVER_DATA':
            return state;
        default:
            return state;
    }
}

export default driverReducer;