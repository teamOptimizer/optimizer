import React, { useContext } from "react";
import { Header, Form, Button, Input } from "semantic-ui-react";

const SelectedCategoryStep = ({ selectedCategory, setActiveStep, foodDetails, setFoodDetails, setFoodQuantity, foodQuantity }) => {
    const updateQuantityItem = (foodQuantity, i, name, value, setterFunction) => {
        const quantity = [...foodQuantity];
        const selectedQuantityItem = foodQuantity[i];
        selectedQuantityItem[name] = value;
        quantity[i] = selectedQuantityItem;
        setterFunction(quantity);
    }

    const renderItems = () => {
        if(Number(foodDetails?.noOfItems) > 0) {
        return Array.from(Array(Number(foodDetails?.noOfItems))).map((x, i) => {
            return (
                <>
                    <Form.Group className="opt-items-group">
                        <Form.Field>
                            <label>Item Name</label>
                            <Input  value={foodQuantity[i]?.name} onChange={(e) => updateQuantityItem(foodQuantity, i, 'name', e.target.value, setFoodQuantity)} />
                        </Form.Field>
                        <Form.Field>-</Form.Field>
                        <Form.Field>
                            <label>Item Count in Kgs (approx)</label>
                            <Input type="number" placeholder="Quantity of Item" value={foodQuantity[i]?.quantity} onChange={(e) => updateQuantityItem(foodQuantity, i, 'quantity', e.target.value, setFoodQuantity)} />
                        </Form.Field>
                    </Form.Group>
                </>
            )
          });
        }
    }

    const updateQUantityItems = (value) => {
        const quantity = Array.from(Array(Number(value))).map((x, i) => { return { name: '', quantity: '' } });
        setFoodQuantity(quantity)
    }

    const foodForm = () => {
        return (
            <>
                <Form.Field>
                    <label>Number of Food Items</label>
                    <Input value={foodDetails.noOfItems} type="number" placeholder="count of items" onChange={(e) => {updateQUantityItems(e.target.value); setFoodDetails({ ...foodDetails, noOfItems: e.target.value })}} />
                </Form.Field>
                {renderItems()}
                <Form.Group>
                    <Form.Field width={8}>
                        <Button onClick={() => setActiveStep('category')}>Back</Button>
                    </Form.Field>
                    <Form.Field width={8}>
                        <Button primary floated="right" disabled={Number(foodDetails?.noOfItems) < 0} onClick={() => {setActiveStep('location');}}>Continue</Button>
                    </Form.Field>
                </Form.Group>
            </>
        )
    }
    const renderForms = () => {
        switch(selectedCategory) {
            case 'food':
                return foodForm();
            default:
                return null;
        }
    }
    return (
        <div>
            <Header>Add more details about selected categories</Header>
            <Form>
                {renderForms()}
            </Form>
        </div>
    )
}

export default SelectedCategoryStep;