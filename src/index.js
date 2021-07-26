import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 import App from './App';
 import {BrowserRouter as Router} from 'react-router-dom';
import {ProductProvider} from './Context';
// import {ProductProviderr} from './Contextt';
// import Home from './Home';
// import Navbar from './Navbar';
// import Menapparels from './Menapparels';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <ProductProvider>
<Router> 
<App />
 </Router>
</ProductProvider>
, document.getElementById('root'));
// ReactDOM.render(<Menapparels />, document.getElementById('root'));
// ReactDOM.render(<Home />, document.getElementById('root'));
// ReactDOM.render(<Navbar />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
