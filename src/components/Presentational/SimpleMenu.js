import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

class SimpleMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        const userId = 7;
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
                        <Link className="menuItem" onClick={this.handleClose} to={`/home/${userId}`}>My Restaurants</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link className="menuItem" onClick={this.handleClose} to={`/addRestaurant/${userId}`}>Add Restaurant</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link className="menuItem" onClick={this.handleClose} to={'/'} >Logout</Link>
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

export default SimpleMenu;