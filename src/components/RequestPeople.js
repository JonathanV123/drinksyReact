import React  from 'react';

class RequestPeople extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.props.requestPeopleData();
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

export default RequestPeople;