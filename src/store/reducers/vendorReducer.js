const initialState = {
    data: [
        { name: 'Vendor1', email: 'vendor1@vanon.com', phone: 123, cnic: 614144443 },
        { name: 'Vendor2', email: 'vendor2@vanon.com', phone: 123, cnic: 614144443 },
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