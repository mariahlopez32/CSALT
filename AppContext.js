import React from 'react';

const AppContext = React.createContext()

export const AppContextProvider = (props) => {
    const [token, setToken] = React.useState('')
    const [user, setUser] = React.useState({})
    const context = {
        token, 
        setToken,
        user,
        setUser,
    }
    return (
        <AppContext.Provider value = {context}>{props.children}</AppContext.Provider>
    )
}
export default AppContext;