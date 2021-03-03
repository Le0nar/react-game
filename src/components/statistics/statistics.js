import React from 'react';
import './statistics.scss';
import StatisticsTable from '../statistics-table/statistics-table';
import ToMainMenuBtn from '../to-main-menu-btn/to-main-menu-btn';

class Statistics extends React.Component {
    render () {
        return(
            <div className="statistics">
                <h3>Chart</h3>
                <StatisticsTable {...this.props}/>
                <ToMainMenuBtn content="Back" onChangeState={this.props.onChangeState}/>
            </div>
        );
    }
}

export default Statistics;