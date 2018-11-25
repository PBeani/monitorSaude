import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import TableauDashboard from '../../components/TableauDashboard/TableauDashboard';
import Auxiliar from '../../hoc/auxiliar';
import Menu from '../../components/Menu/Menu';

class Dashboard extends Component {
    state = {
        routes: [
            { label: 'Febre Amarela', path: '/febreAmarela', component: null },
            { label: 'Hepatite', path: '/hepatite', component: null },
            { label: 'Dengue', path: '/dengue', component: null },
            { label: 'Hipertensão', path: '/hipertensao', component: null },
            { label: 'Diabetes Tipo 1', path: '/diabetesT1', component: null },
            { label: 'Diabetes Tipo 2', path: '/diabetesT2', component: null },
            { label: 'Sífilis Congênita', path: '/sifilisCongenita', component: null },
            { label: 'Hipertensão e Diabetes', path: '/hipertensaoDiabetes', component: null },
        ]
    };

    render() {
        const { path } = { ...this.props };
        const { routes } = { ...this.state };
        return (
            <Auxiliar>
                <Menu routes={routes} path={this.props.match.path} />
                <TableauDashboard path={this.props.match.path} />
                <section className="tableau-holder">
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