import React from 'react';
import './statistics.scss';
import StatisticsTable from '../statistics-table/statistics-table';

class Statistics extends React.Component {
    render () {
        return(
            <div className="statistics">
                <StatisticsTable {...this.props}/>
            </div>
        );
    }
}

export default Statistics;