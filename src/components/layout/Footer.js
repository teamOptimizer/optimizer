import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Menu } from 'semantic-ui-react';
import '../../assets/styles/home.css';
import {
    Container,
    Grid,
    Header,
    List,
    Segment,
} from 'semantic-ui-react'

const Footer = () => {
    // const navigate = useNavigate();
    return (
        <Segment inverted vertical style={{ padding: '5em 0em', marginTop: '1rem' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Sitemap</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                  <List.Item as='a'>Events</List.Item>
                  <List.Item as='a'>CreateEvent</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Home</List.Item>
                  <List.Item as='a'>Login</List.Item>
                  <List.Item as='a'>Register</List.Item>
                  <List.Item as='a'>Notifications</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
}

export default Footer