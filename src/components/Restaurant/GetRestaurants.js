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
        event.preventDefault();
        this.props.requestRestaurantData();
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