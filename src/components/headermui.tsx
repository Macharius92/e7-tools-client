import React, { FunctionComponent, ChangeEvent, MouseEvent, useState } from 'react';
//import '../App.css';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Hidden from '@material-ui/core/Hidden';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Icon from '@mdi/react';
import { mdiDiscord } from '@mdi/js';
import { Discord } from 'mdi-material-ui';
import { useGlobalContext } from '../utilities/GlobalProvider';
import TranslateSelector from './translateselector';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(0.5),
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing(1),
        }
    },
    leftIcon: {
        marginRight: theme.spacing(0.5),
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing(1),
        }
    },
    rightIcon: {
        marginLeft: theme.spacing(0.5),
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
        }
    },
    menuButtonResp: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    title: {
        flexGrow: 1,
    },
    btn_discord: {
        background: '#7289da !important',
        border: '#7289da !important',
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    }
}));

export type Props = {
    handleDrawer: () => void,
    mobileDrawerOpen: boolean
};

const HeaderMui: FunctionComponent<Props> = (props:Props) => {
    //const [auth, setAuth] = useState<boolean>(false);
    const { currentTheme, setTheme, authenticated, userImage } = useGlobalContext();
    const isDark = (currentTheme === 'dark');
    const classes = useStyles();
    const { handleDrawer, mobileDrawerOpen } = props;

    const [anchorEl, setAnchorEl] = useState<Element | null>(null);
    const open = Boolean(anchorEl);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) setTheme('dark');
        else setTheme('light');
    };

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogin = () => {
        //history.push("/auth/discord");
        window.location.href = "/auth/discord";
    }

    //const IconSize = mobileDrawerOpen ? "small" : "default";
    const ButtonSize = mobileDrawerOpen ? "small" : "medium";
    //const SwitchSize = mobileDrawerOpen ? "small" : undefined;
    //const DiscordSize = mobileOpen ? "small" : 1;

    let AuthButton;

    if (authenticated) {
        AuthButton = () => {
            return (
                <nav aria-label="connect" >
                    <Hidden  implementation="css">
                        <Button variant="contained" color="inherit" href="/auth/logout"
                            className={`${classes.btn_discord} ${classes.menuButton}`} startIcon={<Avatar src={userImage} />}>Logout
                        </Button>
                    </Hidden>
                    <Hidden smUp implementation="css">
                        <IconButton edge="start" size="small" className={`${classes.btn_discord} ${classes.menuButton}`} color="inherit" aria-label="connect" href="/auth/logout">
                            <Avatar src={userImage} className={classes.small} />
                        </IconButton>
                    </Hidden>
                </nav>
            );
        }
    }
    else {
        AuthButton = () => {
            return (
                <nav aria-label="connect">
                    <Hidden xsDown implementation="css">
                        <Button variant="contained" color="inherit" href="/auth/discord"
                            className={`${classes.btn_discord} ${classes.menuButton}`} startIcon={<Icon path={mdiDiscord}
                                title="Discord"
                                size={1} />}>Login with Discord
                        </Button>
                    </Hidden>
                    <Hidden smUp implementation="css">
                        {/* <IconButton edge="start" size="small" className={`${classes.btn_discord} ${classes.menuButton}`} color="inherit" aria-label="connect" href="/auth/discord">
                            <Icon path={mdiDiscord}
                                title="Discord"
                                size={1} />
                        </IconButton> 
                        <Button
                            onClick={(event) => handleMenu(event)}
                            aria-owns={open ? 'menu-login' : undefined}
                            aria-haspopup="true"
                            color="inherit"
                            className={classes.menuButton}
                            size="small"
                            endIcon={<Discord
                                fontSize="inherit" />}>
                        </Button>*/}
                        <IconButton edge="start" size="small" className={`${classes.btn_discord} ${classes.menuButton}`} color="inherit" aria-label="connect" onClick={(event) => handleMenu(event)} aria-owns={open ? 'menu-login' : undefined}
                            aria-haspopup="true">
                            <Avatar className={`${classes.btn_discord} ${classes.small}`}>
                                <Discord color="inherit"
                                fontSize="inherit" />
                            </Avatar>
                        </IconButton>
                        <Menu
                            id="menu-login"
                            anchorEl={anchorEl}
                            getContentAnchorEl={null}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            transformOrigin={{ vertical: "top", horizontal: "center" }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem button={true} onClick={handleLogin}>
                                Login to Discord
                            </MenuItem>
                        </Menu>
                    </Hidden>
                </nav>
            );
        }
    }

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButtonResp} color="inherit" aria-label="menu" onClick={handleDrawer}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Epic 7 Tools
                </Typography>
                <TranslateSelector />
                <Button color="inherit" className={classes.menuButton} disableRipple
                    startIcon={<Brightness7Icon/*  fontSize={IconSize} */ className={classes.leftIcon}/>}
                    endIcon={<Brightness3Icon/*  fontSize={IconSize} */ className={classes.rightIcon}/>}
                    size={ButtonSize}>
                    <Switch
                        checked={isDark}
                        size="small"
                        //className={`${classes.leftIcon} ${classes.rightIcon}`}
                        color="default"
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                </Button>
                <AuthButton></AuthButton>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderMui;