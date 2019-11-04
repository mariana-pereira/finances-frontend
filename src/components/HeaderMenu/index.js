import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { MdList, MdHome, MdAccountBalance, MdCreditCard, MdReceipt, MdTrendingUp, MdBusiness, MdSwapHoriz, MdPowerSettingsNew, MdAttachMoney } from "react-icons/md";
import { FaBullseye, FaRegFileAlt } from "react-icons/fa";

import { logout } from "../../services/auth";

import { Container, Nav, NavItem, ShowButton } from './styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ background: '#2e2f2b' }}>
            <Nav>
                <h1>finances</h1>
            </Nav>
            <div className={classes.toolbar} />
            <NavItem>
                <MdHome color='#695eb8' size={24} />
                <Link to='/home'>
                    <ShowButton>
                        Home
                    </ShowButton>
                </Link>
            </NavItem>
            <NavItem>
                <MdAccountBalance color='#695eb8' size={24} />
                <Link to='/account'>
                    <ShowButton>
                        Contas
                    </ShowButton>
                </Link>
            </NavItem>
            <NavItem>
                <MdCreditCard color='#695eb8' size={24} />
                <Link to='/card'>
                    <ShowButton >
                        Cartões
                    </ShowButton>
                </Link>
            </NavItem>
            <NavItem>
                <FaRegFileAlt color='#695eb8' size={24} />
                <Link to='/invoice'>
                    <ShowButton >
                        Faturas
                    </ShowButton>
                </Link>
            </NavItem>
            <NavItem>
                <MdReceipt color='#695eb8' size={24} />
                <Link to='/extract'>
                    <ShowButton>
                        Extrato
                </ShowButton>
                </Link>
            </NavItem>
            <NavItem>
                <MdAttachMoney color='#695eb8' size={24} />
                <Link to='/expense'>
                <ShowButton>
                    Despesas
                </ShowButton>
                </Link>
            </NavItem>
            <NavItem>
                <MdSwapHoriz color='#695eb8' size={24} />
                <Link to='/transfer'>
                <ShowButton>
                    Transferir
                </ShowButton>
                </Link>
            </NavItem>
            <NavItem>
                <MdList color='#695eb8' size={24} />
                <Link to='/budget'>
                <ShowButton>
                    Budget
                </ShowButton>
                </Link>
            </NavItem>
            <NavItem>
                <FaBullseye color='#695eb8' size={24} />
                <Link to='/target'>
                    <ShowButton>
                        Objetivos
                    </ShowButton>
                </Link>
            </NavItem>
            <NavItem>
                <MdTrendingUp color='#695eb8' size={24} />
                <Link to='/investment'>
                    <ShowButton>
                        Investimentos
                    </ShowButton>
                </Link>
            </NavItem>
            <NavItem>
                <MdBusiness color='#695eb8' size={24} />
                <Link to='/company'>
                <ShowButton>
                    Empresas
                </ShowButton>
                </Link>
            </NavItem>
            <NavItem>
                <MdPowerSettingsNew color='#695eb8' size={24} />
                <ShowButton onClick={(e) => logout()}>
                    Logout
                </ShowButton>
            </NavItem>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar} style={{ background: '#2e2f2b' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h3" noWrap>
                        finances
          </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        styles={{ background: '#2e2f2b' }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>

        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;