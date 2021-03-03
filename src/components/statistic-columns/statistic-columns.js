import React from "react";

class StatisticColumns extends React.Component {
  render() {
    const statisticsData = JSON.parse(localStorage.getItem("statistics"));
    let lineList = false;
    if (statisticsData === null) {
      lineList = false;
    } else {
      lineList = statisticsData.map((el, index) => {
        return (
          <tr key={index}>
            {el.map((subEl, subIndex) => {
              return <td key={subIndex}>{subEl}</td>;
            })}
          </tr>
        );
      });
    }
    return <>{lineList}</>;
  }
}

export default StatisticColumns;