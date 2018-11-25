import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Auxiliar from '../../hoc/auxiliar';
import Header from '../../components/Header/Header';
import Home from '../Home/Home';
import './Dashboard.css';

class Dashboard extends Component {
    state = {
        routes: [
            { label: 'Home', path: '/home', component: Home },
        ]
    };

    render() {
        const { path } = { ...this.props.match };
        const { routes } = { ...this.state };

        return (
            <Auxiliar>
                <Header />
                <section>
                    <Switch>
                        {routes.map((route, index) =>
                            <Route key={index} path={path + route.path} component={route.component} />
                        )}
                    </Switch>
                </section>
            </Auxiliar>
        );
    }
}

export default withRouter(Dashboard);