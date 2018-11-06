import React, { Component } from 'react';
import TableauDashboard from '../../components/TableauDashboard/TableauDashboard';

class Dashboard extends Component {
    state = {};
    
    render () {
        return(
            <div>
                <h1>Pagina principal</h1>
                <TableauDashboard path={this.props.match.path} />
            </div>
        )
    }
}

export default Dashboard;