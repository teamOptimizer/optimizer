import React from 'react';
import { Button, Dropdown, Form, Header } from 'semantic-ui-react';
import { categoryOptions } from '../../assets/services/services';

const SelectCategoryStep = ({activeStep, selectedCategory, setSelectedCategory, nextStep }) => {
    return (
        <div>
            <Header>Item you want to donate</Header>
            <Form>
                <Form.Field>
                    <label>Select Category</label>
                    <Dropdown options={categoryOptions} selection placeholder='Food, Academics' fluid value={selectedCategory} onChange={(e, { value }) => setSelectedCategory(value)} />
                </Form.Field>
                <Form.Group>
                    <Form.Field width={8}>
                        <Button disabled={activeStep === 'category'}>Back</Button>
                    </Form.Field>
                    <Form.Field width={8}>
                        <Button primary floated="right" disabled={!selectedCategory} onClick={() => nextStep()}>Continue</Button>
                    </Form.Field>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SelectCategoryStep