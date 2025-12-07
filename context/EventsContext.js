import React, { createContext, useState } from "react";

export const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
        id: '1',
        title: 'Suspicious Login Attempt',
        type: 'Login Alert',
        severity: 'High',
        description: 'Unrecognized login attempt detected from an unknown device.',
        date: '2025-12-05',
    },
]);

const addEvent = (event) => {
   setEvents(prev => [...prev, { ...event, id: Date.now().toString() }]);
};

const updateEvent = (id, updates) => {
    setEvents(prev =>
        prev.map(event => (event.id === id ? { ...event, ...updates } : event))
    );
};

return (
    <EventsContext.Provider value={{ events, addEvent, updateEvent }}>
        {children}
    </EventsContext.Provider>
);
}

    