import React, { useContext } from 'react';
import {AppBar, Box, makeStyles, Toolbar} from '@material-ui/core'
import Login from './accounts/Login';
// import { AccountContext } from '../context/AccountProvider';

const useStyles = makeStyles({
    components:{
        background: '#DCDCDC',
        height: '100vh'
    },
    loginHeader: {
        height: 200,
        backgroundColor: '#00bfa5',
        boxShadow: 'none'
    }
})
const Messenger = () =>{
    const classes = useStyles();
    // const {account} = useContext(AccountContext);
    return (
        <>
            <Box className={classes.components}>
            <AppBar className={classes.loginHeader}>
                <Toolbar></Toolbar>
            </AppBar>
            <Login/>
            </Box>
        </>
    );
}
export default Messenger;