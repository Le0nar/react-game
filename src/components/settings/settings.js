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
                <SettingsItem 
                    name = 'Partner'
                    onChangeState={this.props.onChangeState}
                    currentValue={this.props.partnerName}
                    valueList = {partnersList}/>
                <SettingsItem 
                    name = 'Place'
                    currentValue={this.props.datePlace}
                    onChangeState={this.props.onChangeState}
                    valueList = {placesList}/>
                <SettingsItem 
                    name = 'Time game'
                    currentValue={this.props.timeGame}
                    onChangeState={this.props.onChangeState}
                    valueList = {activeList}/>

                <ToMainMenuBtn content="Back to main menu" 
                    onChangeState={this.props.onChangeState}/>
            </div>
        );
    }
}

export default Settings;