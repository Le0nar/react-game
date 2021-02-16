import React from 'react';
import './select-setting.scss';


class SelectSetting extends React.Component {
    render() {
        return (
        <div className="select-setting">
            <span>
                Звук
            </span>
            <select>
                <option>ВКЛ</option>
                <option>ВЫКЛ</option>
            </select>
        </div>
        );
    }
}

export default SelectSetting;