import React from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
    const [ user, setUser ] = React.useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;

// Notes
/* 
we named this file UserContextProvider.jsx because it is a context provider for user data. first we have to import the UserContext we created in UserContext.js file.
*/