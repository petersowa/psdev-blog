import React, { Component } from 'react';

export default class Default extends Component {
    state = { title: 'Sam' };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                this.setState({ title: json.title });
            });
    }
    render() {
        return <div>Hello, {this.state.title}</div>;
    }
}
