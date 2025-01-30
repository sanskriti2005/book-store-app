
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContextProvider";


export default function Login(){
    let initVals = {
        username: '',
        password: ''
    }
    const [formData, setFormData] = useState(initVals);
    const { loginFunc } = useContext(AuthContext);


    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        loginFunc(formData);
    }
    
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Enter username" value={formData.username} onChange={handleChange}/>
            <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange}/>
            <input type="submit" value="Login" />
        </form>
    )
}