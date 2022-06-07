import React from "react";
import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { DatePicker } from "antd";
import { Input, Button } from "antd";
import randomColor from "randomcolor";
const axios = require("axios");

const { RangePicker } = DatePicker;

const DemoApp: React.FC = () => {
  const [color, setColor] = useState<string>("blue");
  const [display, setDisplay] = useState<string>("dayGridWeek");
  const [events, setEvents] = useState<any>(null);
  const [day, setDay] = useState<string>("");
  const [endDay, setDayEnd] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);
  const [event, setEvent] = useState<string>("");

  const handleDateClick = (info: any) => {
    console.log(info);
    setDisplay("dayGrid");
    setDay(info.dateStr);
  };
  const dataToSend = {
    id: Date.now(),
    title: event,
    start: day[0],
    end: day[1],
    backgroundColor: randomColor(),
  };
  useEffect(() => {
    axios.get("http://localhost:3005/events").then((response: any) => {
      setEvents(response.data);
    });
  }, []);

  const handleSend = () => {
    axios({
      method: "post",
      url: "http://localhost:3005/events",
      data: dataToSend,
    });
    window.location.reload();
  };

  const onChange = (value: any, dateString: any) => {
    setDay(dateString);
    console.log(day);
  };

  const handleEvent = (e: React.FormEvent<HTMLInputElement>) => {
    setEvent(e.currentTarget.value);
  };

  const hoverEvent = (data: any) =>{
     const deleteItem =  data.event._def.publicId
        events.map((el:any) => {
           if(el.id === deleteItem){
              console.log(deleteItem ,"|||||||", el.id)
           }
        })
  }

  return (
    <>
      <div className="nav_calendary">
        <div className="nav_view">
          <h2>Dodaj wydarzenie</h2>
          <h3>Nazwa wydarzenia</h3>
          <Input
            onChange={handleEvent}
            value={event}
            placeholder="Nazwa wydarzenia"
          />
          <h3>Wybierz date</h3>
          <RangePicker
            showTime={{
              format: "HH:mm",
            }}
            format="YYYY-MM-DDTHH:mm"
            onChange={onChange}
          />
          <Button
            className="button_calendary"
            onClick={handleSend}
            type="primary"
          >
            Dodaj
          </Button>
        </div>
      </div>
      <FullCalendar
        themeSystem="bootstrap5"
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        weekends={false}
        dateClick={handleDateClick}
        events={events}
        eventBackgroundColor={color}
        initialView={display}
        dayMaxEventRows={true}
        eventMouseEnter={hoverEvent}

      />
    </>
  );
};
export default DemoApp;
