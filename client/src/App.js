import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Register from './pages/Register'
import ReactDOM from 'react-dom';
import './style/main';
import Header from './component/Header';
import Nav from './component/Nav'
import Main from './component/Main'
import AboutMe from './component/AboutMe'
import Calendar from './component/Calendary';
import Footer from './component/Footer';
import NewLogin from './pages/NewLogin';
import 'antd/dist/antd.css';

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
	   			<Route path="/login" exact component={NewLogin} />
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
