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
    {
        id: '2',
        title: 'Phishing Email Received',
        type: 'Phishing Attempt',
        severity: 'High',
        description: 'Email spoofing Microsoft support requesting password reset.',
        date: '2025-11-28',
    },
    {
        id: '3',
        title: 'MFA Code Requested',
        type: 'MFA Alert',
        severity: 'Medium',
        description: 'Unexpected MFA text message received with no login attempt.',
        date: '2025-11-20',
   },
   {
        id: '4',
        title: 'New Device Connected',
        type: 'Device Activity',
        severity: 'Low',
        description: 'Smart TV connected to the home network. User verified as known.',
        date: '2025-11-18',
   },
   {
        id: '5',
        title: 'Password Reset Request',
        type: 'Account Activity',
        severity: 'Medium',
        description: 'Password reset email received for bank account.',
        date: '2025-11-10',
    },
    {
        id: '6',
        title: 'Software Update Installed',
        type: 'System Update',
        severity: 'Low',
        description: 'Operating system patch applied automatically.',
        date: '2025-11-07',
   },
   {
        id: '7',
        title: 'Unknown Bluetooth Device Detected',
        type: 'Wireless Activity',
        severity: 'Medium',
        description: 'Nearby Bluetooth device attempted to pair.',
        date: '2025-11-03',
   },
   {
        id: '8',
        title: 'Browser Extension Installed',
        type: 'Application Activity',
        severity: 'Low',
        description: 'User installed a new browser extension and reviewed permissions.',
        date: '2025-10-30',
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

    