import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import routes from "./routes/routes"
import ProfilePage from "./components/pages/ProfilePage";
import ClubPage from "./components/pages/ClubPage";

import "./App.module.scss"

const App = ({store}) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={ProfilePage} exact/>
                <Route path="/club" component={ClubPage}/>
                {/*{routes}*/}
            </Switch>
        </Router>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;
