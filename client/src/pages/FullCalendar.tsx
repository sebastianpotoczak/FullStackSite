import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default class DemoApp extends React.Component {
  handleDateClick = (id: any) => {
    alert(id.dateStr);
    console.log(id);
  };
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        dateClick={this.handleDateClick}
        events={[
          { id: "1", title: "event 1", date: "2022-06-06" },
          { id: "2", title: "event 2", date: "2022-06-06" },
        ]}
      />
    );
  }
}
