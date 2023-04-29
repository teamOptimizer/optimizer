import React, { useState, useContext } from 'react';
import AuthContext from '../authContext/AuthContext';
import Layout from '../layout/Layout';
import CreateEventComponent from './CreateEventComponent';

const CreateEvent = () => {
    const [activeStep, setActiveStep] = useState('');
    const { userDetails, setUserDetails } = useContext(AuthContext);
    return (
        <Layout>
            <CreateEventComponent />
        </Layout>       
    )
}

export default CreateEvent;