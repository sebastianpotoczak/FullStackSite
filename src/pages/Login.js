import { useState } from 'react'
const jwt = require('jsonwebtoken')

function App() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password
			}),
		})

		const data = await response.json()

	
		if (data.user) {
			localStorage.setItem('token', data.user)
			localStorage.setItem('phoneToken', data.phones)
			window.location.href = '/termin'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<div className='register_form'>
			<h1 className='register_title'>Login</h1>
			<form className='input_content' onSubmit={loginUser}>
				<input className='register_input'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input className='register_input'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input className='register_submit'  type="submit" value="Login" />
				<a href='http://localhost:3000/register' className='register_submit' >Rejestracja</a>
			</form>
		</div>
	)
}

export default App
