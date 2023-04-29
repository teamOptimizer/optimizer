import React, { useState } from 'react';
import EventsComponent from './EventsComponent';
import Layout from '../layout/Layout';
import '../../assets/styles/auth.css';

const Events = () => {
    const [eventData, setEventData] = useState({name: '', metrics: '', location: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleEventCreation = (event) => {
        event?.preventDefault();
        setIsLoading(true);
        // createEvent(eventData).then((data) => {
        //     // get user details 
        // }).finally(() => setIsLoading(false));
    }
    return (
        <Layout>
            <EventsComponent />
        </Layout>
    )
}

export default Events;