import React from 'react';
import './modal.scss';


class Modal extends React.Component {
    render() {
        return (
        <div className="modal" id="myModal">
              <div className="modal-content">
                <div className="modal-header">
                    <span className="close">&times;</span>
                    <h2>Настройки</h2>
                </div>
                <p>тут будут настройки</p>
            </div>
        </div>
        );
    }
}

export default Modal;