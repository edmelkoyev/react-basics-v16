import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import logo from './logo.svg';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <header>
                    <img src={logo} alt="React logo" />
                    <h1>React 16</h1>
                </header>

                <main>
                    {ReactDOM.createPortal(
                        <h1>Portal</h1>,
                        document.getElementById('portal')
                    )}
                </main>
            </div>
        );
    }
}