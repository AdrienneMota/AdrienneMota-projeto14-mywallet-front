import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext()

export const AuthProvider = (props) => {
    const [token, setToken] = useState("")

    useEffect(()=>{
        const tokenStorage = localStorage.getItem("token")
        if(tokenStorage){
            setToken(JSON.parse(tokenStorage))
        }
    }, [])

    return(
        <AuthContext.Provider  value={{token, setToken}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext)