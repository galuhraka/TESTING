import FullCalendar from "@fullcalendar/react";
import React, { useState } from "react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "react-modal";

import "./index.css";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

const ExternalDragnDrop = () => {
  const [visible, setVisible] = useState(false);

  function openModal() {
    setVisible(true);
  }

  function closeModal() {
    setVisible(false);
  }

  const BusinessHours = {
    start: "06:00",
    finish: "23:00",
    weekday: "long",
  };

  const handleDateClick = (arg) => {
    openModal(arg.dateStr);
  };

  const handleDrop = (info) => {
    alert(info);
  };

  const handleDragStart = (info) => {
    alert(info);
  };

  const handleDragStop = (info) => {
    alert(info);
  };

  return (
    <>
      <div>
        <div id="external-events">
          <p>
            <strong>Draggable Events</strong>
          </p>
          <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
            <div className="fc-event-main">My Event 1</div>
          </div>
          <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
            <div className="fc-event-main">My Event 2</div>
          </div>
          <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
            <div className="fc-event-main">My Event 3</div>
          </div>
          <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
            <div className="fc-event-main">My Event 4</div>
          </div>
          <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
            <div className="fc-event-main">My Event 5</div>
          </div>
          <p>
            <input type="checkbox" id="drop-remove" />
            <label htmlFor="drop-remove">remove after drop</label>
          </p>
        </div>
        <div id="calendar-container">
          <FullCalendar
            plugins={[timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            // weekends={false}
            firstDay={1}
            slotMinTime={BusinessHours.start}
            slotMaxTime={BusinessHours.finish}
            dayHeaderFormat={{ weekday: "long" }}
            selectable={true}
            dateClick={handleDateClick}
            // eventClick={handleDateClick}
            timeZone="Asia/Jakarta"
            locale="id"
            headerToolbar="false"
            eventStartEditable={true}
            editable={true}
            droppable={true}
            eventDrop={handleDrop}
            eventDragStart={handleDragStart}
            eventDragStop={handleDragStop}
          />
          <CModal
            alignment="center"
            scrollable
            visible={visible}
            onClose={() => setVisible(false)}
          >
            <CModalHeader>
              <CModalTitle>Modal title</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
            </CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisible(false)}>
                Close
              </CButton>
            </CModalFooter>
          </CModal>
        </div>
      </div>
    </>
  );
};

export default ExternalDragnDrop;
