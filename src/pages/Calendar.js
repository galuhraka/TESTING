import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import React from "react";

const Calendar = () => {
  const handleDateClick = (e) => {
    alert("click", e);
  };

  const BusinessHours = {
    start: "06:00",
    finish: "23:00",
    weekday: "long",
  };

  const eventTimeFormat = {
    // like '14:30:00'
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    meridiem: false,
  };
  return (
    <>
      {" "}
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        // weekends={false}
        firstDay={1}
        slotMinTime={BusinessHours.start}
        slotMaxTime={BusinessHours.finish}
        dayHeaderFormat={{ weekday: "long" }}
        selectable={true}
        // dateClick={handleDateClick}
        timeZone="Asia/Jakarta"
        locale="id"
        headerToolbar='false'
      />
    </>
  );
};

export default Calendar;
