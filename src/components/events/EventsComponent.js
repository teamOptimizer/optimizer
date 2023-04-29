import React, { useEffect, useState } from 'react';
import { Segment } from 'semantic-ui-react';
import  { getEventDetails } from '../../firebase/firebase';

export default function EventsComponent() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        (async () => {
        const eventDetails = await getEventDetails();
        setEvents(Object.values(eventDetails));
        })();
    }, []);

    const renderEvents = () => {
        const eventsElement = events.map((events) => {
            return (
                <Segment className=''>

                </Segment>
            )
        });
        return eventsElement;
    }
    return (
        <div>
            {renderEvents()}
        </div>
    )
}