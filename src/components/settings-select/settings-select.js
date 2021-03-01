import React from 'react';

class SettingsSelect extends React.Component {
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

export default SettingsSelect;