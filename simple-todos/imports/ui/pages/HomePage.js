import React from 'react';
import { Component } from 'react';
import style from '../../../client/styles.js';

// Import React Grid System
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

class HomePage extends Component {

    render() {
  
      const buttonStyle = {
        margin: '10px'
      }

      return (
        <Container>
          <div>
  
            <Card> 
              <CardHeader title="Welcome to My BuddyUp!" titleStyle={style.homepageStyle} 
              /> 
              <CardActions>
                <Row>
                  <center>
                    <RaisedButton style={buttonStyle} label="Signup" secondary={true} href="users/signup"/>
                    <RaisedButton style={buttonStyle} label="Login" primary={true} href="users/login"/>
                  </center>
                </Row>
              </CardActions>
              <CardMedia>
                <img src="img/people.jpg" />
              </CardMedia>
            </Card>
  
          </div>
        </Container>
      );
  
    }
  
  };
  
  export default HomePage;
 