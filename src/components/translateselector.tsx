import React, { FunctionComponent, Fragment, useState, MouseEvent } from 'react';
import { Menu, MenuItem, Button } from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, Theme } from '@material-ui/core/styles';

const options = ['English', 'Français'];

const useStyles = makeStyles((theme: Theme) => ({
    menuButton: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing(2)
        }
    },
}));


const TranslateSelector: FunctionComponent = () => {

    const [anchorEl, setAnchorEl] = useState<Element | null>(null);
    const open = Boolean(anchorEl);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const classes = useStyles();

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelectItem = (event: MouseEvent<HTMLElement>, index: number) => {
        setAnchorEl(null);
        setSelectedIndex(index);
    };

    //const IconSize = mobileOpen ? "small" : "default";
    //const ButtonSize = mobileOpen ? "small" : "medium";

    return (
        <Fragment>
            <Button
                onClick={(event) => handleMenu(event)}
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                color="inherit"
                className={classes.menuButton}
                //size={ButtonSize}
                startIcon={<TranslateIcon /*fontSize={IconSize}*/ />}
                endIcon={<ExpandMoreIcon />}>
                    {options[selectedIndex]}
            </Button>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                open={open}
                onClose={handleClose}
                //className={classes.menu}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        //disabled={index === 2}
                        selected={index === selectedIndex}
                        onClick={(event) => handleSelectItem(event, index)}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </Fragment>
    );
};

export default TranslateSelector;