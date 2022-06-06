import React from "react";
import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

const DemoApp: React.FC = () => {
  const [color, setColor] = useState<string>("blue");
  const [display, setDisplay] = useState<string>("dayGridMonth");
  const [events, setEvents] = useState<any>(null)

  const handleDateClick = (info: any) => {
    console.log(info);
    setDisplay("dayGrid");
    window.location.reload();
  };
  // const eventClick = (info: any) => {
  //   setColor("red");
  // };
  // const eventMouseLeave = () => {
  //   setColor("pink")
  // }
  useEffect(() => {
    fetch("http://localhost:3005/events")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("network error!");
        }
      })
      .then((data) => {
        setEvents(data)
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
      weekends={false}
      dateClick={handleDateClick}
      events={events}
      // eventMouseEnter={eventClick}
      eventBackgroundColor={color}
      // eventMouseLeave={eventMouseLeave}
      initialView={display}
      dayMaxEventRows={true}
    />
  );
};
export default DemoApp;
