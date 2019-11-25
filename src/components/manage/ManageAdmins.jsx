import React, { useState } from 'react';
import MaterialTable from 'material-table';
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


const ManageAdmins = (props) => {
    const { classes } = props;
    const [state, setState] = useState({
        headers: [
            { title: 'Name', field: 'name' },
            { title: 'Email', field: 'email', type: 'email' },
            { title: 'Phone #', field: 'phone', type: 'number' },
            { title: 'CNIC', field: 'cnic' },
        ],
        data: [
            { name: 'Admin1', email: 'admin1@vanon.com', phone: 123, cnic: 614144443 },
            { name: 'Admin2', email: 'admin2@vanon.com', phone: 123, cnic: 614144443 },
        ],
    });

    const handleRowAdd = (newData) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                {
                    const temp = [...state.data];
                    temp.push(newData);
                    setState({ ...state, temp });
                }
                resolve();
            }, 1000);
        })

    }

    const handleRowUpdate = (newData, oldData) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                {
                    if (oldData) {
                        const temp = [...state.data];
                        temp[temp.indexOf(oldData)] = newData;
                        setState({ ...state, temp });
                    }
                }
                resolve();
            }, 1000);
        })
    }

    const handleRowDelete = (oldData) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                {
                    const temp = [...state.data];
                    temp.splice(temp.indexOf(oldData), 1);
                    setState({ ...state, temp });
                }
                resolve();
            }, 1000);
        })
    }



    return (
        <div className={classes.root}>
            <div className={classes.contentContainer}>
                <Typography variant="h3" inherit className={classes.Heading}>Manage Admins</Typography>

                <Table
                    headers={state.headers}
                    data={state.data}
                    editable={{
                        onRowAdd: (newData) => { handleRowAdd(newData) },
                        onRowUpdate: (newData, oldData) => { handleRowUpdate(newData, oldData) },
                        onRowDelete: (oldData) => { handleRowDelete(oldData) }
                    }}
                />
                {/* <MaterialTable
                    title=""
                    icons={tableIcons}
                    columns={state.headers}
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
                /> */}



            </div>
        </div>
    )
}

export default (withStyles(styles)(ManageAdmins));