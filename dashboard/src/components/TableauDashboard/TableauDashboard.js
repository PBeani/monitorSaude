import React, { Component } from 'react';
import tableau from 'tableau-api';
import classes from './TableauDashboard.css';


  class TableauDashboard extends Component {
    
    componentDidMount() {  
      this.initViz()  
    }  
    
    
    initViz() {  
      const vizUrl = 'https://public.tableau.com/views/Livro1_1047/Painel1?:embed=y&:display_count=yes&publish=yes';  
      const vizContainer = this.vizContainer;  
      let viz = new window.tableau.Viz(vizContainer, vizUrl)  
    }  
    
    
    render() {  
      return (  
        <div ref={(div) => { this.vizContainer = div }}>  
        </div>  
      )  
    }  
  }
  
  export default TableauDashboard;