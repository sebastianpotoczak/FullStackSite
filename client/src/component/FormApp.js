import {useState} from 'react';
import axios from 'axios';
const registerUrl = "https://be-beauty-pl.herokuapp.com/register"

const FormApp = () => {
    const[login, setLogin] = useState("");
    const[password, setPassword] = useState("")

   
   

   const handleChange = (e) =>{
       const newLogin = e.target.value
        setLogin(newLogin)
    }
    const handleChangePhone = (e) => {
        const newPhone = e.target.value
        setPassword(newPhone)
    }
    const sendSubmit = (e) =>{
        let request = {
            email: login,
            password: password
    }
    axios.post('https://beauty-app-pl.herokuapp.com/login', request)
    .then(resp => {
        alert(resp.data.message)
    })
    .catch( err => {
        console.log(err)
    })
}

   

    return(
        
        <form className="form"> 
            <label className="form_contain">
                
            <p>E-mail</p>
                <input className="input_value" onChange={handleChange} value={login} type="text" name="name"></input>
               <p>Hasło</p>
                <input  className="input_value" onChange={handleChangePhone} value={password} type="password" name="phone number"></input>

            <input onClick={sendSubmit} type="submit" value="Wyślij" className="send_button"/>
            <a className="send_button"  href={registerUrl} >Rejestracja</a>
            </label>
        </form>
    )
}

export default FormApp