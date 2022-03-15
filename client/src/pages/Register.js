import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import validator from 'validator'

function App() {
	const history = useHistory()

	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const[phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const[error,setError] = useState(false)
	const[validateEmail, setValidateEmail] = useState(false)
	const[admin,setAdmin] = useState("false")

	const handleEmail = (e) => {
		const newEmail = e.target.value;
		setEmail(newEmail)

		if(validator.isEmail(newEmail)){
		  setValidateEmail(true)
		}
	  }

	  const handleClick = (e) => {
		if( validateEmail === false || password === "" ||phone === ""){
		  setError(true)
		  e.preventDefault()
		}
	}


async function registerUser(event) {
	event.preventDefault()

	const response = await fetch('https://beauty-app-pl.herokuapp.com/api/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name,
			surname,
			phone,
			email,
			password,
			admin	
		}),
	})

	const data = await response.json()
	if(data.status === 'error'){
		alert('Ten email juz istnieje')
		return
	}

	if (data.status === 'ok') {
		history.push('/login')
	}
}


	return (
		<div className='register_form'>
			<h1 className='register_title'>Rejestracja</h1>
			<div className='input_content'>

				<input className='register_input'
					value={name}
					onChange={(e) => {
						setName(e.target.value)
						// if(name === "" || name.length >= 2){
						// 	setError(true)
						// }else{
						// 	setError(false)
						// }
					
					}}
					type="text"
					placeholder="Name"
				/>
					<input className='register_input'
					value={surname}
					onChange={(e) => {
						setSurname(e.target.value)
						// if(surname === "" || surname.length >= 2){
						// 	setError(true)
						// }else{
						// 	setError(false)
						// }
					}}
					type="text"
					placeholder="surname"
				/>
					<input className='register_input'
					value={phone}
					onChange={(e) => {
						setPhone(e.target.value)
						// if(phone === "" || phone.length !== 9){
						// 	setError(true)
						// }else{
						// 	setError(false)
						// }
					}}
					type="number"
					placeholder="phone"
				/>
			
				<input className='register_input'
					value={email}
					onChange={handleEmail}
					type="email"
					placeholder="Email"
				/>
			
				<input className='register_input'
					value={password}
					onChange={(e) => {
						setPassword(e.target.value)
						// if(password === "" || password.length >= 6 ){
						// 	setError(true)
						// }else{
						// 	setError(false)
						// }
					}}
					type="password"
					placeholder="Password"
				/>
		

					<div className='button_content'>
					<input className='register_submit' type="submit" onClick={registerUser} value="Register" />
				
					<a className='register_submit' href='http://localhost:3000/login'>Logowanie</a>
					</div>
				
				
				</div>

		</div>
	)
}

export default App
