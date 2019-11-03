// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

import "@fortawesome/fontawesome-free/css/all.css"

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle';

// Import Framework7-React plugin
import Framework7React from 'framework7-react';

// Import main App component
import App from './components/App.tsx';

// Framework7 styles
import 'framework7/css/framework7.bundle.css';

// Icons
import './css/icons.css';

// Custom app styles
import './css/app.css';

// Init Framework7-React plugin
Framework7.use(Framework7React);

// Mount React App
ReactDOM.render(
  React.createElement(App),
  document.getElementById('app'),
);