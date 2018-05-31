import React, { Component } from 'react';

const cheese = 'cheese';
const wine = 'wine';
const name = 'name';

class AddItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addItemField: '',
        }
        console.log(this.props);
    } render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label>
                    Item:
                    <input type="text" name='name' value={this.state.addItemField} onChange={this.props.onAddItemChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddItemForm;