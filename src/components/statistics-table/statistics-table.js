import React from 'react';
import './statistics-table.scss';

import StatisticColumns from '../statistic-columns/statistic-columns';

class StatisticsTable extends React.Component {
    render () {
        return(
            <table className="statistics-table">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Partner</th>
                        <th>Place</th>
                        <th>Time</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <StatisticColumns />
                </tbody>
            </table>
        );
    }
}

export default StatisticsTable;