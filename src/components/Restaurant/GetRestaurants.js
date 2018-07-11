import React  from 'react';

class GetRestaurants extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.props.requestRestaurantData();
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Receive Data
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default GetRestaurants;