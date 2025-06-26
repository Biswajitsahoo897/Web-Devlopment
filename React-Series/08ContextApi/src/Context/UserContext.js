import React from "react";

const UserContext = React.createContext();

export default UserContext;




/* 
Context API is a way to pass data through the component tree without having to pass props down manually at every level.
It is useful for global data that needs to be accessed by many components,
such as user authentication, theme settings, or language preferences.
And it provides the data variable and a function to update it.
*/