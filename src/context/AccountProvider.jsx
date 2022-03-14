import { useContext, useState } from "react";
import React from 'react'
// export let AccountContext;

// const AccountProvider = ( {children} )=> {
const AccountProvider = (  )=> {
    // AccountContext = useContext();
    const [account, setAccount] = useState();

    // console.log(account);

    return (
        <>
        I am acc provider
        </>
            // <AccountContext.Provider value={{
            //     account,
            //     setAccount
            // }} >
            //     {children}
            // </AccountContext.Provider>
    );
}
export default AccountProvider;

