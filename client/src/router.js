import React, {PropTypes} from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'

import Form from './components/Form/Form';


 class Router extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component={Form}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
