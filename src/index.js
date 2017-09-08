// Import React
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles/index.css';


import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import Components
import App from './components/App';
import BaseLayout from "./components/BaseLayout";
import About from "./components/About";
import Contact from "./components/Contact";
import Mac from "./components/Mac";
import iOS from "./components/iOS";
import Movies from "./components/Movies";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Mac" component={Mac} />
        <Route path="/iOS" component={iOS} />
        <Route path="/Movies" component={Movies} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
