import React, { useEffect, useContext, useState } from 'react';
import { Tab } from 'semantic-ui-react';
import Layout from '../layout/Layout';
import RequestsComponent from './RequestsComponent';
import AuthContext from '../authContext/AuthContext';
import { getRequestSents, getRequestsReceived } from '../../firebase/firebase';

export default function Requests() {
    const { userDetails } = useContext(AuthContext);
    const [requestSent, setRequestSent] = useState([]);
    const [requestReceived, setRequestReceived] = useState([]);

    const panes = [
        {
            menuItem: 'Requests Received',
            render: () => <Tab.Pane attached={false}><RequestsComponent requests={requestReceived} requestType="received" /></Tab.Pane>,
        },
        {
            menuItem: 'Requests Sent',
            render: () => <Tab.Pane attached={false}><RequestsComponent requests={requestSent} requestType="sent" /></Tab.Pane>,
        }
    ]
    useEffect(() => {
        (async() => {
            let requestSentList = [];
            let requestReceivedList = [];
            if(userDetails?.isLoggedIn) {
               if(userDetails?.userData?.userType === 'both' || userDetails?.userData?.userType === 'requestor') requestSentList = await getRequestSents(userDetails.userUid);
               if(userDetails?.userData?.userType === 'both' || userDetails?.userData?.userType === 'donar') requestReceivedList = await getRequestsReceived(userDetails.userUid);
               setRequestSent(Object.entries(requestSentList));
               setRequestReceived(Object.entries(requestReceivedList));
            }
        })();
    }, []);

    const renderTabs = () => {
        switch(userDetails?.userData?.userType) {
            case 'both':
                return <Tab menu={{ text: true }} panes={panes} />;
            case 'requestor':
                return <RequestsComponent requests={requestReceived.length ? requestReceived[1] : []} requestType="received" requestId={requestReceived[0]} />
                case 'donar':
                    return <RequestsComponent requests={requestSent.length ? requestSent[1] : []} requestType="sent" requestId={requestReceived[0]} />
            default: 
                return null;
        }
        
    }
    return (
        <Layout>
            {renderTabs()}
        </Layout>
    )
}