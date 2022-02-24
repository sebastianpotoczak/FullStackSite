import Login from "../pages/Login";
import CalendarAwesome from 'react-awesome-calendar';
import {useState, useEffect} from 'react';
import Service from "./Service";
import { faEarlybirds } from "@fortawesome/free-brands-svg-icons";
import React from 'react';
import Footer from "./Footer";
const jwt = require('jsonwebtoken')

const AppView = () =>{
 

    const Calendary = () => {
        const[years, setYear] = useState("");
        const[months, setMonths] = useState("01");
        const[click, setClick] = useState(false);
        const[events, setEvents] = useState(null);
        const[day, setDay] = useState("");
        const[number, setNumber] = useState("");
        

    useEffect(() => {
        fetch("http://localhost:3005/events")
        .then(response => {
            if (response.ok) {
               return response.json();

            } else  {
                throw new Error("network error!");
            }
        })
        .then(data => setEvents(data))
        .catch(err => console.log(err));
    }, [])



   
        const handleClick = () => {
            setClick(true)
        }





        const changeDate = () => {
            const takeDate = document.querySelector(".calendarHeader > h1")
            const days = takeDate.firstElementChild
            const year = takeDate.lastElementChild
            const month = days.nextElementSibling
            setDay(takeDate.innerText)
            setYear(year.innerText);
         
            setNumber(days.innerText)


      

          
            if(month.innerText === "December"){
                setMonths("12")
            }
            if(month.innerText === "November"){
                setMonths("11")
            }
            if(month.innerText === "October"){
                setMonths("10")
            }
            if(month.innerText === "September"){
                setMonths("09")
            }
            if(month.innerText === "August"){
                setMonths("08")
            }
            if(month.innerText === "July"){
                setMonths("07")
            }
            if(month.innerText === "June"){
                setMonths("06")
            }
            if(month.innerText === "May"){
                setMonths("05")
            }
            if(month.innerText === "April"){
                setMonths("04")
            }
            if(month.innerText === "March"){
                setMonths("03")
            }
            if(month.innerText === "February"){
                setMonths("02")
            }
            if(month.innerText === "January"){
                setMonths("01")
            }

            if(days.innerText === "1"){
                setNumber(`01`)
            }
            if(days.innerText === "2"){
                setNumber(`02`)
            }
            if(days.innerText === "3"){
                setNumber(`03`)
            }
            if(days.innerText === "4"){
                setNumber(`04`)
            }
            if(days.innerText === "5"){
                setNumber(`05`)
            }
            if(days.innerText === "6"){
                setNumber(`06`)
            }
            if(days.innerText === "7"){
                setNumber(`07`)
            }
            if(days.innerText === "8"){
                setNumber(`08`)
            }
            if(days.innerText === "9"){
                setNumber(`09`)
            } 
        }

        const token = localStorage.getItem('token')
        const decoded = jwt.verify(token, 'secret123')
        const nameDecoded = decoded.name
     
     
       if(click === false){
           return (
               <>
            <div className="calendary_position">
            <div className="login_text_position">
            <h1>Ustal date wizytu juz teraz!</h1>
            <h2>Sprawdz Termin!</h2>
            <h1>Witaj {nameDecoded}!</h1>    
           <CalendarAwesome events={events} onChange={changeDate} onClickTimeLine={handleClick}/>
           </div>
            </div>         
           

            </>
           )
       }else{
           return(
               <>
            <Service events={events} props={[day ,years,months, number]}/>
           
            </>
           )
       }
    }


    if(localStorage.getItem('token') === null){
        return  (
            <>  
            <div className="text_position">
                <div className="text_contain">
                <h1>Ustal date wizytu juz teraz!</h1>       
           
                <Login />

                </div>
          
            </div>
        </>
        )
    }else{
        return(
            <>
            
                <Calendary />
            </>
        )  
    }
    
}


export default AppView;