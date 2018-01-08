import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

export default class Modal extends React.Component {
    componentWillMount() {
        this.mRoot = document.createElement('div');
        document.body.appendChild(this.mRoot);
    }

    componentWillUnmount() {
        document.body.removeChild(this.mRoot);
    }

    render() {
        return ReactDOM.createPortal(
            <div className="modal">
                <button className="modal__close-button" onClick={this.props.onClose}>Закрыть</button>
                {this.props.children}
            </div>,
            this.mRoot
        );
    }
}