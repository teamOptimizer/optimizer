import React, { useState, useContext } from 'react';
import { Segment, Step } from 'semantic-ui-react';
import AuthContext from '../authContext/AuthContext';
import BasicStep from './BasicStep'
import AddressStep from './AddressStep';

const EditProfileComponent  = () => {
    const [activeStep, setActiveStep] = useState('basic');
    const { setUserDetails: setUserDetailsInContext, userDetails } = useContext(AuthContext);
    const renderSteps = () => {
        switch(activeStep) {
            case 'basic':
                return <BasicStep userData={userDetails?.userData} setActiveStep={() => setActiveStep('address')} />;
            case 'address':
                return <AddressStep userDetails={userDetails} setUserDetailsInContext={setUserDetailsInContext} />
            default:
                return null;
        }
    }

    const renderStepperIndicator = () => {
        return (
            <Step.Group stackable vertical ordered>
                <Step completed={activeStep === 'address'} active={activeStep === 'basic'}>
                    <Step.Content>
                        <Step.Title>Basic Details</Step.Title>
                        <Step.Description>Enter your basic Info</Step.Description>
                    </Step.Content>
                </Step>
                <Step active={activeStep === 'address'}>
                    <Step.Content>
                        <Step.Title>Address</Step.Title>
                        <Step.Description>Set your Address</Step.Description>
                    </Step.Content>
                </Step>
                {userDetails?.userData?.userType === 'requisite' ? (
                <Step>
                    <Step.Content>
                        <Step.Title>Looking for</Step.Title>
                        <Step.Description>Items you are looking for</Step.Description>
                    </Step.Content>
                </Step>
                ) : null}
            </Step.Group>
        )
    }
    return (
        <div className='opt-layout-container opt-edit-profile-component'>
            <div>
            {renderStepperIndicator()}
            </div>
            <Segment>
                {renderSteps()}
            </Segment>
                   
        </div>
    )
}

export default EditProfileComponent