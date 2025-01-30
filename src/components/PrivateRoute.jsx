import { useContext } from "react"
import { AuthContext } from "../context/AuthContextProvider"
import { Navigate } from "react-router-dom"

export default function PrivateRoute({children}){
    // const {login} = useContext(AuthContext)
    // if (login){
    //     return children
    // } else{
    //     alert('Please login')
    //     return <Navigate to="/login"/>
    // }
}