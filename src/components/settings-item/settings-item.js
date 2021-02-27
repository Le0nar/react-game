import React from 'react';
import './settings-item.scss';


class SettingsItem extends React.Component {
  changeValue = (e) => {
    const propertyName = e.target.previousElementSibling.innerText;
    const value = e.target.value;
    let stateName = "";

    if (propertyName === "Partner") {
      stateName = "partnerName";
    } else if (propertyName === "Place") {
      stateName = "datePlace";
    }

    this.props.onChangeState(stateName, value);

    console.log(this.props);
  };
  render() {
    const listOptions = this.props.valueList.map((el) => {
      return <option key={el}>{el}</option>;
    });
    const select = (
      <select
        defaultValue={this.props.currentValue}
        onChange={this.changeValue}
      >
        {listOptions}
      </select>
    );
    return (
      <div className="settings-item">
        <span>{this.props.name}</span>
        {select}
      </div>
    );
  }
}

export default SettingsItem;