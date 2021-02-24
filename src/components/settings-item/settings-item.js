import React from 'react';
import './settings-item.scss';


class SettingsItem extends React.Component {
    render() {
        const listOptions = this.props.value.map(el => {
            return <option key={el}>{el}</option>
        });
        const select = <select>{listOptions}</select>
        
        return (
        <div className="settings-item">
            <span>
                {this.props.name}
            </span>
            {select}
        </div>
        );
    }
}

export default SettingsItem;