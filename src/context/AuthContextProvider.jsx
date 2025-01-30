import { createContext, useState } from "react"
import axios from 'axios'

const AuthContext = createContext()

export default function AuthContextProvider({children}){
    const [login, setLogin] = useState(false)

    const loginFunc = ({username, password}) => {
        axios.post('https://discovered-snapdragon-zinnia.glitch.me/', {username, password})
        .then(res => console.log(res))
    }

    return(
        <AuthContext.Provider value={{login, loginFunc}}>
            {children}
        </AuthContext.Provider>
    );
}