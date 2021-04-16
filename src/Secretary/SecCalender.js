import React from "react";
import Navbar from '../components/Navbar'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

//import "@fullcalendar/core/main.css";
//import "@fullcalendar/daygrid/main.css";

const SecCalender = () => {
    const events = [{ title: "today's event", date: new Date() }];

    return (
        <div className="App">
        <Navbar />
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
            events={events}
          />
        </div>
      );
}
export default SecCalender