import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/document.css';
import Header from './components/header/Header'
import CurrentIssue from './components/currentIssue/CurrentIssue'

class App extends Component {
    render() {
        return (
            <div className="wrap">
                <Header />
                <div className="content">
                    <CurrentIssue />
                </div>
            </div>

        );
    }
}

export default App;
