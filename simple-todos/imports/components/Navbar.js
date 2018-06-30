import React from 'react';
import { IndexLink, Link, browserHistory } from 'react-router';
import {
    Container,
    Icon,
    Image,
    Menu,
    Sidebar,
    Responsive
  } from "semantic-ui-react";


var NavBar = React.createClass({

  _handleLogout(e){
    e.preventDefault();
    Meteor.logout(function(err){
      if(!err){
        browserHistory.push('/users/login');
        Store.dispatch(setSnackBar(true, 'You\'ve been signed out successfully.', '#4CAF50'));
      }
    });
  },


  render: function() {
    return (
   
    
     
          <div>
            <Responsive {...Responsive.onlyMobile}>
              <NavBarMobile
                leftItems={leftItems}
                onPusherClick={this.handlePusher}
                onToggle={this.handleToggle}
                rightItems={rightItems}
                visible={visible}
              >
                <NavBarChildren>{children}</NavBarChildren>
              </NavBarMobile>
            </Responsive>
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
              <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
              <NavBarChildren>{children}</NavBarChildren>
            </Responsive>
          </div>

    ); 
  }
});

export default NavBar;