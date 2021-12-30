import React, { Component } from 'react';
import './style.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            start: 'start'
        };

        this.start = this.start.bind(this);
        this.back = this.back.bind(this);
    }

    start() {
        
        let state = this.state;

        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
            this.state.start = 'START'
        } else {
            this.timer = setInterval(() => {
                let state = this.state;
                state.number += 0.1
                this.setState(state)
                this.state.start = 'PAUSE'
            }, 100);

            this.setState(state);
        }
    }

    back() {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }

        let state = this.state;
        state.number = 0;
        state.start = 'START';
        this.setState(state);
    }

    render() {
        return (
            <div className='container'>
                <img src={require('./assets/cronometro.png')} className='img' />
                <a className='timer'> {this.state.number.toFixed(1)} </a>
                <div className='btn'>
                    <a className='button' onClick={this.start}>{this.state.start}</a>
                    <a className='button' onClick={this.back}>RESTART</a>
                </div>
            </div>
        )
    }
}
export default App;