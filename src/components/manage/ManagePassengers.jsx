import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { ROOT_STYLE } from '../../utils/cssConstants';
import Table from '../table';

const styles = () => ({
    root: ROOT_STYLE,
    contentContainer: {
        flexGrow: 1,
        padding: '30px 30px',
    },
    Heading: {
        fontSize: 30,
        color: '#4A4A4A',
        marginBottom: 25,
        fontWeight: '500',
    },
});


const ManagePassengers = (props) => {
    const { classes } = props;
    const [state, setState] = useState({
        headers: [
            { title: 'Name', field: 'name' },
            { title: 'Email', field: 'email', type: 'string' },
            { title: 'Phone #', field: 'phone', type: 'number' },
            { title: 'CNIC', field: 'cnic' },
        ],
        data: [],
    });

    //didMount
    useEffect(() => {
        const data = [
            { name: 'Vendor1', email: 'admin1@vanon.com', phone: 123, cnic: 614144443 },
            { name: 'Vendor2', email: 'admin2@vanon.com', phone: 123, cnic: 614144443 },
        ];
        setState({ ...state, data })
    }, [])


    return (
        <div className={classes.root}>
            <div className={classes.contentContainer}>
                <Typography variant="h3" inherit className={classes.Heading}>Manage Passengers</Typography>

                <Table
                    headers={state.headers}
                    data={state.data}
                    editable={{
                        onRowAdd: newData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    setState(prevState => {
                                        const data = [...prevState.data];
                                        data.push(newData);
                                        return { ...prevState, data };
                                    });
                                }, 600);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    if (oldData) {
                                        setState(prevState => {
                                            const data = [...prevState.data];
                                            data[data.indexOf(oldData)] = newData;
                                            return { ...prevState, data };
                                        });
                                    }
                                }, 600);
                            }),
                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    setState(prevState => {
                                        const data = [...prevState.data];
                                        data.splice(data.indexOf(oldData), 1);
                                        return { ...prevState, data };
                                    });
                                }, 600);
                            }),
                    }}
                />
            </div>
        </div>
    )
}

export default (withStyles(styles)(ManagePassengers));