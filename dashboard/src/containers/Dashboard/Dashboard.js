import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Auxiliar from '../../hoc/auxiliar';
import Menu from '../../components/Menu/Menu';
import Home from '../Home/Home';

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
                <Menu routes={routes} path={this.props.match.path} />
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