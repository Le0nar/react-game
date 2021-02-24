import React from 'react';
import './modal.scss';
import SettingsItem from '../settings-item/settings-item';


class Modal extends React.Component {
    render() {
        return (
        <div className="modal" id="myModal">
              <div className="modal-content">
                <div className="modal-header">
                    <span className="close">&times;</span>
                    <h2>Настройки</h2>
                </div>
                <div className="modal-body">
                    <SettingsItem />
                    <p>Ещё другой текст...</p>
                </div>
            </div>
        </div>
        );
    }
}

export default Modal;