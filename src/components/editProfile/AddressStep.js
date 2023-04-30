import React, { useEffect, useState }  from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Form, Header } from "semantic-ui-react";
import { getUserDetails, updateUserDetails } from "../../firebase/firebase";

export const initialAddressData = {
    pincode: '',
    houseNo: '',
    landmark: '',
    address: '',
    city: '',
    state: '',
}

export default function AddressStep({ userDetails, setUserDetailsInContext }) {

    const navigate = useNavigate();
    const [addressData, setAddressData ] = useState(initialAddressData);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        if(userDetails?.userData?.location) setAddressData(userDetails?.userData?.location);
    }, []);

    const handleSubmitClick = () => {
        setIsLoading(true);
        updateUserDetails(userDetails.userUid, { emailVerified: true, userData: { ...userDetails.userData, location: addressData }  }).then(async () => {
            const updatedUserDetails = await getUserDetails(userDetails.userUid);
            setUserDetailsInContext({ ...updatedUserDetails, isLoggedIn: true });
            setShowSuccessMessage(true);
            navigate('/');
         }).catch((err) => console.log(err)).finally(() => setIsLoading(false));
    };
    

    if(showSuccessMessage) {
        return (
            <div>
                <Header>hooray! you are ready to rock</Header>
            </div>
        )
    }

    return(
        <div>
            <Header>Address Details</Header>
            <Form loading={isLoading}>
            <Form.Group widths={"equal"}>
                <Form.Field required>
                    <label>House Number/Flat Number:</label>
                    <input placeholder='House Number' value={addressData.houseNo} onChange={(e) => { setAddressData({ ...addressData, houseNo: e.target.value })}} />
                </Form.Field>
                <Form.Field required>
                    <label>Area</label>
                    <input placeholder='Landmark' value={addressData.landmark} onChange={(e) => { setAddressData({ ...addressData, landmark: e.target.value })} } />
                </Form.Field>
            </Form.Group>
            <Form.Group widths={"equal"}>
                <Form.Field required>
                    <label>Full Address</label>
                    <input placeholder='Full address' value={addressData.address} onChange={(e) => { setAddressData({ ...addressData, address: e.target.value })}} />
                </Form.Field>
                <Form.Field required>
                    <label>Pincode</label>
                    <input placeholder='Pincode' value={addressData.pincode} onChange={(e) => { setAddressData({ ...addressData, pincode: e.target.value })}} />
                </Form.Field>
            </Form.Group>
            <Form.Group widths={"equal"}>
            <Form.Field required>
                    <label>State</label>
                    <input placeholder='State' value={addressData.state} onChange={(e) => { setAddressData({ ...addressData, state: e.target.value })}} />
                </Form.Field>
                <Form.Field required>
                    <label>City</label>
                    <input placeholder='City' value={addressData.city} onChange={(e) => { setAddressData({ ...addressData, city: e.target.value })}} />
                </Form.Field>
            </Form.Group>
                <Form.Group>
                <Form.Field width={8} >
                        <Button onClick={() => handleSubmitClick()} primary>Back</Button>
                    </Form.Field>
                    <Form.Field width={8} >
                        <Button floated="right" onClick={() => handleSubmitClick()} primary>Submit</Button>
                    </Form.Field>
                </Form.Group>
            </Form>
        </div>
    )
}