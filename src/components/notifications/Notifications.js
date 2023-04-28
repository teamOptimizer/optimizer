import { Card, Header, Icon } from "semantic-ui-react";
import Layout from "../layout/Layout";
import "../../assets/styles/notification.css"

function Notifications() {
    const notifications = [
        {
            category: 'food',
            description: 'Nikhil raised the food donation request of 10 kg of items rice, sambar at kairatabad',
            createdOn: '',
            action: '/event/id',
        },
        {
            category: 'clothes',
            userDetails: { name: 'Organisations', userType: 'organisation', members: 25, location: '' },
            description: 'Nikhil raised the Clothing donation request',
            createdOn: '',
            eventId: '',
            action: 'request'
        },
    ]


   function handleSVGicons(type) {
switch (type) {
    case "food":
        return(
            <svg  fill="#fff" width="20px" height="20px" viewBox="0 -24.48 122.88 122.88" version="1.1" id="Layer_1" >
                <g>
                <path class="st0" d="M97.31,36.95c0,9.92-3.49,18.39-10.48,25.38c-7,7-15.46,10.5-25.38,10.5c-9.88,0-18.34-3.49-25.35-10.5 c-7-6.99-10.52-15.46-10.52-25.38c0-9.89,3.51-18.32,10.52-25.34c7.03-7,15.48-10.52,25.35-10.52c9.92,0,18.38,3.51,25.38,10.52 C93.81,18.63,97.31,27.06,97.31,36.95L97.31,36.95L97.31,36.95L97.31,36.95z M16.37,30.34c3.15-2.15,4.73-4.96,4.46-11.39V2.42 c-0.03-2.31-4.22-2.59-4.43,0l-0.16,13.41c-0.01,2.51-3.78,2.59-3.77,0l0.16-13.87c-0.05-2.48-4.05-2.73-4.1,0 c0,3.85-0.16,10.02-0.16,13.87c0.2,2.43-3.3,2.75-3.21,0L5.32,2.05C5.23,0.18,3.17-0.49,1.77,0.39C0.28,1.34,0.58,3.25,0.52,4.86 L0,20.68c0.08,4.6,1.29,8.34,4.89,9.93c0.55,0.24,1.31,0.43,2.19,0.56L5.84,69.75c-0.07,2.29,1.8,4.16,3.99,4.16h0.5 c2.47,0,4.56-2.11,4.49-4.68l-1.09-38.07C14.88,30.98,15.83,30.71,16.37,30.34L16.37,30.34z M106.74,68.59l-0.06-34.65 c-12.15-7.02-8.28-34.07,3.88-33.92c14.78,0.17,16.53,30.48,3.82,33.81l0.94,34.9C115.5,75.33,106.75,75.94,106.74,68.59 L106.74,68.59z M82.33,36.92c0,5.78-2.03,10.71-6.12,14.8c-4.08,4.07-9.01,6.12-14.79,6.12c-5.74,0-10.67-2.05-14.75-6.12 c-4.08-4.09-6.12-9.02-6.12-14.8c0-5.74,2.04-10.67,6.12-14.74c4.09-4.07,9.01-6.12,14.75-6.12C73.03,16.07,82.33,25.3,82.33,36.92 L82.33,36.92L82.33,36.92z M87.22,36.92c0-7.1-2.5-13.17-7.53-18.2s-11.12-7.53-18.27-7.53c-7.13,0-13.2,2.5-18.2,7.53 c-5.03,5.03-7.56,11.1-7.56,18.2c0,7.12,2.53,13.19,7.56,18.24c5,5.04,11.07,7.57,18.2,7.57c7.14,0,13.23-2.53,18.27-7.57 C84.71,50.1,87.22,44.03,87.22,36.92L87.22,36.92L87.22,36.92L87.22,36.92z"/>
                </g>
            </svg>
        )
        case "clothes":
            return(
                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 48 48">
                <title>clothes</title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="invisible_box" data-name="invisible box">
                    <rect width="48" height="48" fill="none"/>
                    </g>
                    <g id="icons_Q2" data-name="icons Q2">
                    <path d="M45.2,12.9,37.1,4H10.9L2.8,12.9a3,3,0,0,0,.1,4.2l7.5,7.5V44H37.7V24.6l7.5-7.5A3,3,0,0,0,45.2,12.9Zm-8.4,6.8-3.1-2.9V40H14.3V16.8l-3.1,2.9L6.4,14.9,12.7,8h7.4a4,4,0,0,0,7.8,0h7.4l6.3,6.9Z"/>
                    </g>
                </g>
                </svg>
            )
        break;

    default:
        break;
}
    }
    return ( 
        <div>
            <Layout>
                <div className="notifi-container">
                    {/* <h6>Notifications</h6> */}
                    <Header style={{marginBottom:"20px"}} as='h3'>Notifications</Header>
                {notifications.map((notification)=>{
                    return(
                        <Card className="notifi-cards" >
                        <div className="notifi-card-details">
                            <div className="card-icon-container">
                            {handleSVGicons(notification.category)}
                            </div>
                            <span>{notification.description}</span>
                        </div>
                    </Card>
                    )
                })}
               
                
                </div>
            </Layout>
            
        </div>
     );
}

export default Notifications;