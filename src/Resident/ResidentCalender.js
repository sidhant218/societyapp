import React from "react";
import Navbar from '../components/ResidentNavbar'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";


const ResidentCalender = () => {
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
export default ResidentCalender