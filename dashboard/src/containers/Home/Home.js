import React, { Component } from 'react';
import TableauHolder from '../../components/TableauHolder/TableauHolder';
import './Home.css';

class Home extends Component {
    state = {
        views: [
            {
                url: 'https://public.tableau.com/views/RP2_0/Planilha5?:embed=y&:display_count=yes',
                className: 'full fixed-height',
                title: 'Distribuição geográfica das ocorrências'
            },
            {
                url: 'https://public.tableau.com/views/RP2_0/Planilha7?:embed=y&:display_count=yes',
                className: 'half fixed-height',
                title: 'Ocorrências por sexo do paciente'
            },
            {
                url: 'https://public.tableau.com/views/RP2_0/Planilha2?:embed=y&:display_count=yes',
                className: 'half fixed-height',
                title: 'Distribuição mensal de ocorrências (2018)'
            },
            {
                url: 'https://public.tableau.com/views/RP2_0/Planilha3?:embed=y&:display_count=yes',
                className: 'full extra-height',
                title: 'Cidades com mais de 1.000 ocorrências'
            },
        ]
    }

    render() {

        const { views } = { ...this.state };

        return (
            <div className="home">
                {views.map((view, index) => {
                    return <TableauHolder 
                        url={view.url} 
                        key={index} 
                        className={view.className} 
                        title={view.title} />
                })}
            </div>
        );
    }
}

export default Home;