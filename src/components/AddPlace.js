import React, { Component } from 'react';

const cheese = 'cheese';
const wine = 'wine';
const name = 'name';

class AddPlaceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            cheese: '',
            wine:'',
         };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name='name' value={this.state.name.value} onChange={this.handleChange} />
                </label>
                <label>
                    Cheese Description:
                    <input type="text" name='cheese'value={this.state.cheese.value} onChange={this.handleChange} />
                </label>
                <label>
                    Wine Description:
                    <input type="text" name='wine' value={this.state.wine.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddPlaceForm;