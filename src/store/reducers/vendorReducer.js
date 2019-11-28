const initialState = {
    data: [
        { name: 'Vendor1', email: 'vendor1@vanon.com', phone: '0348-9097792', cnic: '42101-452250053-5' },
        { name: 'Vendor2', email: 'vendor2@vanon.com', phone: '0321-2570252', cnic: '42101-42225553-5' },
    ]
}

const vendorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_VENDOR_DATA':
            return state;
        default:
            return state;
    }
}

export default vendorReducer;