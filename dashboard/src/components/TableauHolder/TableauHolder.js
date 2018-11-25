import React from 'react';
import TableauView from '../TableauView/TableauView';
import './TableauHolder.css';

const tableauHolder = (props) => {
    return (
        <div className={"viewHolder" + ' ' + props.className || ''}>
            <h3>{props.title}</h3>
            <TableauView url={props.url} />
        </div>
    );
}

export default tableauHolder;