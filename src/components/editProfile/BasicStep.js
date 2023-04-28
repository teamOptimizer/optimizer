import React, { useState, useContext } from "react";
import { Form, Button, Dropdown } from "semantic-ui-react";
import AuthContext from "../authContext/AuthContext";
import { userTypes, categoryOptions } from "../../assets/services/services";
import { getUserDetails, updateUserDetails } from "../../firebase/firebase";

const initialData = {
    name: '',
    phone: '',
    userType: '',
}

const BasicStep = () => {
    const [basicUserData, setBasicUserData] = useState(initialData);
    const [isUserDetailsModified, setIsUserDetailsModified] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { userDetails, setUserDetails} = useContext(AuthContext);

    const onSubmitBasicDetails = () => {
        updateUserDetails(userDetails.userUid, {userData: { ...userDetails.userData, ...basicUserData }}).then(async () => {
           const updatedUserDetails = await getUserDetails(userDetails.userUid);
           console.log(updatedUserDetails, 'hurry');
           setUserDetails(updatedUserDetails);
        }).catch((err) => console.log(err)).finally(() => setIsLoading(false));
    }

    return (
        <Form loading={isLoading}>
            <Form.Group widths={"equal"}>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' value={basicUserData.name} onChange={(e) => {setIsUserDetailsModified(true); setBasicUserData({ ...basicUserData, name: e.target.value })}} />
                </Form.Field>
                <Form.Field>
                    <label>Phone Number</label>
                    <input placeholder='Phone Number' value={basicUserData.phone} onChange={(e) => { setIsUserDetailsModified(true); setBasicUserData({ ...basicUserData, phone: e.target.value })} } />
                </Form.Field>
            </Form.Group>
            <Form.Group>
                <Form.Field width={16}>
                    <label>User Type</label>
                    <Dropdown fluid selection options={userTypes} placeholder="Select User type" value={basicUserData.userType} onChange={(e, { value }) => {setIsUserDetailsModified(true); setBasicUserData({ ...basicUserData, userType: value })}} />
                </Form.Field>
            </Form.Group>
            {basicUserData.userType !== 'donar' && basicUserData.userType !== '' ? (
                <Form.Group>
                    <Form.Field width={16}>
                        <label>Categories</label>
                        <Dropdown fluid multiple selection options={categoryOptions} placeholder="Select interested item" value={basicUserData.categories} onChange={(e, { value }) => {setIsUserDetailsModified(true); setBasicUserData({ ...basicUserData, categories: value })}} />
                    </Form.Field>
                </Form.Group>
            ) : null}
            <Button type='submit' floated="right" primary onClick={() => onSubmitBasicDetails()}>Continue</Button>
      </Form>
    )
}

export default BasicStep;