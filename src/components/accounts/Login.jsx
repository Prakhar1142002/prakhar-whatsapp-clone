import { Dialog, withStyles, Box, Typography, makeStyles, List, ListItem } from "@material-ui/core";
// import { useContext } from "react";
import { GoogleLogin } from 'react-google-login'
// import { AccountContext } from "../../context/AccountProvider";

const useStyle = makeStyles({
    component: {
        display: 'flex'
    },
    dialog: {
        padding: '56px 0 56px 56px',
    },
    qr: {
        margin: '50px 0 0 50px',
        height: 264,
        width: 264
    },
    title: {
        fontSize: 26,
        marginBottom: 25,
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight: 300   
    },
    list: {
        '&  > *': {
            padding: 0,
            marginTop: 15,
            fontSize: 18,
            lineHeight: '28px',
            color: '#4a4a4a'
        }
    }
})

const style = {
    dialogPaper: {
        marginTop: '12%',
        height: '95%',
        width: '60%',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        overflow: 'hidden'
    }
};
const Login = ({classes}) =>{
    const clientId = '967127696441-2va6mmhff3gb67i7p8c6mnb3dfsul8s5.apps.googleusercontent.com'
    const url = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const classname = useStyle();

    const onLoginSuccess = (res)=>{
        console.log(res.profileObj);
        console.log("Succesful login");
        // setAccount(res.profileObj);
    }
    const onLoginFailure = ()=>{
        
        console.log("Unsuccesful login");
    }

    // const [account, setAccount] = useContext(AccountContext);  // for importing the export done in AccountProvider
    
    return (
        <>
            <Dialog 
            classes={{paper: classes.dialogPaper}}
            BackdropProps = {{style: {backgroundColor: 'unset'}}}
            open={true}>
                <Box className={classname.component}>
                <Box className={classname.dialog}>
                    <Typography className={classname.title}>To use WhatsApp on your computer:</Typography>
                    <List className={classname.list}>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Box>
                <Box style={{position:'relative'}}>
                    <img src={url} alt="QR" className={classname.qr} />
                    <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translateX(0%) translateY(-25%)'}}>
                        
                            <GoogleLogin
                                clientId={clientId}
                                buttonText=""
                                onSuccess={onLoginSuccess}
                                onFailure={onLoginFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                            />

                        
                            {/* <GoogleLogout
                                clientId={clientId}
                                buttonText=""
                                // onLogoutSuccess={onSignoutSuccess}
                            >
                            </GoogleLogout>  */}
                        
                    </div>
                </Box>
            </Box>
            </Dialog>
        </>
    );
}
export default withStyles(style)(Login);