import React from 'react';
import './settings.scss';
import SettingsItem from '../settings-item/settings-item';
import ToMainMenuBtn from '../to-main-menu-btn/to-main-menu-btn';



class Settings extends React.Component {
    render() {
        const partnersList = ['Hayako', 'Yuki', 'Neko'];
        const placesList = ['Carry', 'Spring', 'Waterfall'];
        const activeList = ['Off', 'On'];
        return (
            <div className="settings">
                <h3>Settings</h3>
                <SettingsItem name = 'Partner'
                    value = {partnersList}/>
                <SettingsItem name = 'Place'
                value = {placesList}/>
                <SettingsItem name = 'Time game'
                value = {activeList}/>
                <ToMainMenuBtn content="Back to main menu" 
                    onChangeState={this.props.onChangeState}/>
            </div>
        );
    }
}

export default Settings;