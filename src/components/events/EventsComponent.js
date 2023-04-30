import React, { useEffect, useState, useContext } from 'react';
import { Container, Image, Button, Grid, Header, Segment, Icon } from 'semantic-ui-react';
import  { getEventDetails, requestForItem } from '../../firebase/firebase';
import AuthContext, { initialUserDetails } from '../authContext/AuthContext';

export default function EventsComponent() {
    const { userDetails } = useContext(AuthContext);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        (async () => {
        const eventDetails = await getEventDetails();
        setEvents(Object.entries(eventDetails));
        })();
    }, []);

    const renderEvents = () => {

        const renderQuantity = (quantity) => {
            return quantity?.map((item) => {
               return <p style={{ fontSize: 12 }}><b>{item.name}</b>: {item.quantity} kgs</p>
            })
        }

        const requestForEvent = async (eventId, eventDetails) => {
            const requestItem = {
                eventUid: eventId,
                eventDetails: eventDetails,
                requestedBy: { userData:  userDetails?.userData, userUid: userDetails.userUid },
                requestedTo:  eventDetails?.createdBy,
                status: 'pending'
            }
            requestForItem(requestItem).then((data) => {
                console.log(data, 'horray! request created');
            })
        }

        const eventsElement = events.map((eventsArray) => {
            let event = [];
            if(eventsArray.length === 2) event = eventsArray[1];
            return (
                <Container style={{ marginBottom: 5}}>
                    <Segment>
                        <div className='opt-events-container'>
                            <Image
                                size="small"
                                bordered
                                style={{ maxWidth: 150}}
                                src={require(`../../assets/images/${event.category}.jpg`)}
                            />
                            <div className='opt-event-content-container'>
                                <Header style={{ textTransform: 'capitalize' }}>{event.category}</Header>
                                <p>Created by <span style={{ color: 'black', fontWeight: 'bold' }}>{event?.createdBy?.name}</span></p>
                                {event?.location?.houseNo || event?.location?.landmark || event?.location?.city || event?.location?.pincode ? <div className="opt-location-text"><Icon name='pin' color="grey" />{`${event?.location?.houseNo || ''}, ${event?.location?.landmark  || ''}, ${event?.location?.address  || ''}, ${event?.location?.city  || ''}-${event?.location?.pincode}, ${event?.location?.state} .`}</div> : null}
                                {event.quantity?.length ? 
                                (
                                    <div className="opt-event-items">
                                        <p style={{ marginBottom: 0}}>Items:</p>
                                        {renderQuantity(event.quantity)}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <div style={{ borderTop: '1px dashed grey', marginTop: 10 }}>
                            <Grid>
                                <Grid.Row columns="3" style={{ paddingBottom: 0 }}>
                                    <Grid.Column>
                                        <Button style={{ backgroundColor: 'transparent' }} fluid onClick={() => requestForEvent(eventsArray[0], eventsArray[1])}>Request</Button>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Button style={{ backgroundColor: 'transparent' }} fluid>Comment</Button>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Button style={{ backgroundColor: 'transparent' }} fluid>Like</Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </div>
                    </Segment>
                    {/* <Card fluid>
                        <Card.Content>
                            <Card.Header style={{ textTransform: 'capitalize' }}>{event.category}</Card.Header>
                            <Card.Meta>raised by {event?.createdBy?.name}</Card.Meta>
                            <Card.Description>
                                Steve wants to add you to the group <strong>best friends</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green'>
                                    Approve
                                </Button>
                                <Button basic color='red'>
                                    Decline
                                </Button>
                            </div>
                        </Card.Content>
                    </Card> */}
                </Container>
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