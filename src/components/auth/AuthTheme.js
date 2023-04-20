import React from 'react';
import { Grid, Segment, Image } from 'semantic-ui-react';

const AuthTheme = ({ imageUrl, children }) => {
    return (
            <Segment className='opt-login-container'>
                <Grid >
                    <Grid.Row>
                        <Grid.Column computer={10} className='opt-login-image-container' tablet={8} only='computer'>
                            <Image size="big" src={require('../../assets/images/login.jpg')} />
                        </Grid.Column>
                        <Grid.Column computer={6} tablet={8} mobile={16}>
                            {children}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
    )
}

export default AuthTheme;