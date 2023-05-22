import React, { Component } from 'react';

export class EventsClass extends Component {
    clickHandler() {
        console.log("Clicked the Class Button");
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me - class component</button>
            </div>
        );
    }
}

export default EventsClass;