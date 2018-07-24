import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

class SimpleMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };
    }


    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        return (
            <div>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    id='menuColor'
                >
                    Menu
        </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem>
                        <Link className="menuItem" onClick={this.handleClose} to={`/home/${this.props.userId}`}>My Restaurants</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link className="menuItem" onClick={this.handleClose} to={`/addRestaurant/${this.props.userId}`}>Add Restaurant</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link className="menuItem" onClick={() => { this.handleClose; this.props.logout() }} to={'/'} >Logout</Link>
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

export default SimpleMenu;