import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ReactDOM from 'react-dom';
import 'reset-css';
import './scss/main.scss';
import Header from './component/Header';
import Nav from './component/Nav'
import Main from './component/Main'
import AboutMe from './component/AboutMe'
import Calendar from './component/Calendary';
import Footer from './component/Footer';





const Index = () => {
  return(
    <>
    <Nav />
    <Header />     
    <Main />
    <AboutMe />
    <Footer />
  </>
  )
}
const Termin = () => {
  return (
    <>
      <Nav /> 
      <Calendar />
  </>
  )
}


const App = () => {
  return (
	<div>
       <BrowserRouter>
	   			<Route exact path='/' component={Index} />
	   			<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
				<Route path="/termin" exact component={Termin} />
		  </BrowserRouter>    
		</div>
  )
}
ReactDOM.render(
  <App/>
  ,
  document.getElementById('root')
);






export default App
