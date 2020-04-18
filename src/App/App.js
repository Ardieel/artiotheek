import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../containers/HomePage';
import { LoginPage } from '../containers/LoginPage';
import { RegisterPage } from '../containers/RegisterPage/RegisterPage';
import { ArtAddPage } from '../containers/ArtAddPage/ArtAddPage';
import Footer from "../components/Footer/Footer";
import HeaderMain from "../components/Header/HeaderMain";
import Container from '@material-ui/core/Container'
import Box from "@material-ui/core/Box";

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            {/*<Switch>*/}
                            <Container maxWidth="sm">
                                <div>
                                <HeaderMain />
                                </div>

                            <Box my={8}>

                                <PrivateRoute exact path="/" component={HomePage} />
                                <PrivateRoute exact path="/artAddPage" component={ArtAddPage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Redirect from="*" to="/" />
                            </Box>
                            {/*</Switch>*/}
                            </Container>

                        </Router>
                    </div>
                </div>
                {/*<Footer />*/}
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };