import React from 'react';
import { Icon, Segment } from 'semantic-ui-react';


export default function RequestsComponent({ userDetails, requests= [], requestType }) {
    const renderRequest = () => {
        return requests.map((request) => {
            return (
                <div>
                    <Segment>
                       <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <p>{requestType === 'sent' ? 'you' : request[1]?.requestedBy?.userData?.name} {requestType === 'sent' ? 'requested for the event' : 'requested the Event'}</p>  
                            {requestType === 'received' ? <div>
                                {request[1].status === 'pending' ? <><Icon name="close" /> <Icon name="check" /></> : null}
                            </div> : null}
                       </div>
                    </Segment>
                </div>
            )
        })
    }

    return (
        <div>
            {renderRequest()}
        </div>
    )
}