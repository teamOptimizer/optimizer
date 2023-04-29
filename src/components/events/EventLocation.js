import React, { useState } from "react";
import { Header, Form, Button } from "semantic-ui-react";

export default function EventLocation({ addressData, setAddressData, createDonationEvent }) {
    console.log(addressData, 'hello')
    const [isLoading, setIsLoading] = useState(false);


    return (
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
                    <Form.Field width={16} >
                        <Button floated="right" onClick={() => createDonationEvent()} primary>Submit</Button>
                    </Form.Field>
                </Form.Group>
            </Form>
        </div>
    )
}