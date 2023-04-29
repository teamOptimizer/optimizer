import React, { useState } from 'react';
import { Button, Input, Dimmer, Loader } from 'semantic-ui-react'
// import { createEvent } from '../../firebase/firebase';
import Layout from '../layout/Layout';
import AuthTheme from '../auth/AuthTheme';
import '../../assets/styles/auth.css';
import { Header } from 'semantic-ui-react';

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
        <AuthTheme imageUrl={'../../assets/images/Donates.jpg'}>
            {isLoading ?       <Dimmer active inverted> <Loader size='big' /> </Dimmer> : (
            <div className='opt-signup-inner-container'>
                <Header>Donate</Header>
                <div className='opt-auth-input-container'>
                    <p>Item Type</p>
                    <Input type='text' value={eventData.name} placeholder="food,clothes,academics,construction..." onChange={(e) => setEventData({ ...eventData, name: e.target.value })}  />
                </div>
                <div className='opt-auth-input-container'>
                    <p>Quantity</p>
                    <Input type='number' value={eventData.metrics} placeholder="1,2,3..." onChange={(e) => setEventData({ ...eventData, metrics: e.target.value })}  />
                </div>
                <div className='opt-auth-input-container'>
                    <p>Location</p>
                    <Input type='url' value={eventData.location} placeholder="address" onChange={(e) => setEventData({ ...eventData, location: e.target.value })} />
                </div>
                <Button fluid onClick={() => handleEventCreation()} className='opt-primary-button'>Create Event</Button>
            </div>
            )}
        </AuthTheme>
        </Layout>
    )
}

export default Events;