// Import React Essentials
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Import Pages and/or Components
import AppLayout from '../../ui/layouts/AppLayout.jsx';
import HomePage from '../../ui/pages/HomePage.jsx';


// Release the meeeettteeeoooor!
Meteor.startup( () => {
  
    render(
        
        <Route path="/" component={ AppLayout } >
  
          {/* Home Page */}
          <IndexRoute component={ HomePage }  onChange={ redirectIfSignedIn } onEnter={ redirectIfSignedIn } />

        </Route>,

      
document.getElementById( 'render-target' )
);
});