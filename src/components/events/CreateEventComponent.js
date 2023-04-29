import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Segment, Step } from 'semantic-ui-react';
import SelectCategoryStep from './SelectCategoryStep';
import SelectedCategoryStep from './SelectedCategoryDetails';
import EventLocation from './EventLocation';
import AuthContext from '../authContext/AuthContext';
import { createEvent } from '../../firebase/firebase';
import { initialAddressData } from '../editProfile/AddressStep';
import '../../assets/styles/events.css';

const initialFoodDetails = {
    noOfItems: '',
    items: [],
}

const CreateEventComponent = () => {

    const [activeStep, setActiveStep] = useState('category');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [foodDetails, setFoodDetails] = useState(initialFoodDetails);
    const [foodQuantity, setFoodQuantity] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    // clothing details
    const [clothingDetails, setClothingDetails] = useState();
    const [clothingQuantity, setClothingQuantity] = useState();

    // 
    const [locationDetails, setLocationDetails] = useState(initialAddressData);
    const { userDetails } = useContext(AuthContext);

    const navigate = useNavigate();
    const renderStepper = () => {
        return (
            <div className='opt-layout-container'>
                <Step.Group stackable vertical ordered>
                    <Step completed={activeStep === 'level1'} active={activeStep === 'category'}>
                        <Step.Content>
                            <Step.Title>Select Category</Step.Title>
                            <Step.Description>Item you want to donate</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step active={activeStep === 'level1'}>
                        <Step.Content>
                            <Step.Title>Category Details</Step.Title>
                            <Step.Description>Add more details about category</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step active={activeStep === 'location'}>
                        <Step.Content>
                            <Step.Title>Location </Step.Title>
                            <Step.Description>Location to collect the items</Step.Description>
                        </Step.Content>
                    </Step>
                </Step.Group>
            </div>
        )
    }

    const getData = () => {
        switch(selectedCategory) {
            case 'food':
                return foodDetails;
            case 'clothing':
                return clothingDetails;
            default:
                return null;
        }
    }

    const getQuantity = () => {
        switch(selectedCategory) {
            case 'food':
                return foodQuantity;
            case 'clothing':
                return clothingQuantity;
            default:
                return null;
        }
    }

    const createDonationEvent = () => {
        const eventDetails = {
            category: selectedCategory,
            data: getData(),
            quantity: getQuantity(),
            createdBy: userDetails?.userData,
            createdOn: new Date().toISOString(),
            location: locationDetails,
        }
        createEvent(eventDetails).then((data) => {
            navigate('/events')
        }).catch((err) => console.log(err))
    }

    const renderStepperComponents = () => {
        switch(activeStep) {
            case 'category':
                return (
                    <SelectCategoryStep selectedCategory={selectedCategory} activeStep={activeStep} setSelectedCategory={setSelectedCategory} nextStep={() => setActiveStep('level1')} />
                );
            case 'level1': 
                return (
                    <SelectedCategoryStep 
                        foodDetails={foodDetails}
                        setFoodDetails={setFoodDetails}
                        selectedCategory={selectedCategory}
                        setActiveStep={(value) => setActiveStep(value)}
                        foodQuantity={foodQuantity}
                        setFoodQuantity={setFoodQuantity}
                    />
                )
            case 'location':
                return (
                    <EventLocation
                        createDonationEvent={createDonationEvent}
                        addressData={locationDetails}
                        setAddressData={setLocationDetails}
                    />
                )
            default:
                return null;
        }   
    }

    return (
        <div className='opt-layout-container opt-edit-profile-component'>
            <div>
                {renderStepper()}
            </div>
            <Segment>
                {renderStepperComponents()}
            </Segment>
        </div>
    )
}

export default CreateEventComponent;