import React from 'react';

class StatisticColumns extends React.Component {
    render () {
        const statisticsData = [[1,2,3,4,5], [6,7,8,9,10]];
        const lineList = statisticsData.map((el, index) => {
            return (<tr key={index}>{el.map((subEl, subIndex) => {
                return <td key={subIndex} >{subEl}</td>
            })}</tr>)
        })
        return(
            <>
                {lineList}
            </>
        );
    }
}

export default StatisticColumns;