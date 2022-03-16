import { useState } from 'react'


function App() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('https://localhost:3000/api/login', {
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
			localStorage.setItem('surnameToken', data.surname)
			localStorage.setItem('admin', data.admin)
			window.location.href = '/termin'
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
				<a href='https://beauty-app-pl.herokuapp.com/register' className='register_submit' >Rejestracja</a>
			</form>
		</div>
	)
}

export default App
