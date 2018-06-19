import React, { Component } from 'react';
console.log("EDIT PEOPLE FORM RUNNING")

class EditPeopleForm extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            email: this.props.email,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('A name was submitted: ' + this.state);
        const person = {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email
        }
        this.props.onEditPeopleData(person)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default EditPeopleForm;