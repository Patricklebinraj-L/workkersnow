import React, { useEffect, useState } from "react";
import "./index.css";
import Icons from "../../components/icons";
import { Drawer, List, ListItem, ListItemText, Box, Menu, MenuItem, useMediaQuery, AppBar, Toolbar, Typography, IconButton, Button, Avatar } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';
import BoltIcon from '@mui/icons-material/Bolt';
import { useTheme, createTheme, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Outlet, } from "react-router-dom";
import BoxLoading from "../../components/boxLoading";
import SimpleLoading from "../../components/simpleLoading";
import Footer from "./footer";
import { navigateTo } from "../../utils/tools";
import SnackBars from "../../components/snackBar";
import { useDispatch } from "react-redux";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Layout = (props) => {

    const { children, noFooter = null } = props;

    const [menu, setMenu] = useState(false);
    const [profileDialogue, setProfileDialogue] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const [succes, setSuccess] = useState(false);
    const [message, setMessage] = useState(false);
    const [snack, setsnack] = useState(false);
    const [mode, setMode] = useState("light");
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    const muiTheme = React.useMemo(() =>
        createTheme({
            palette: {
                mode,
                primary: {
                    main: mode === "light" ? "#0781db" : "#97d3ff",
                },
                secondary: {
                    main: mode === "light" ? "#d523a3" : "#ffb6e6",
                },
                background: {
                    default: mode === "light" ? "#f7faff" : "#181a1b",
                    paper: mode === "light" ? "#fff" : "#23272a",
                },
                text: {
                    primary: mode === "light" ? "#222" : "#fff",
                    secondary: mode === "light" ? "#555" : "#e0e0e0",
                }
            }
        }), [mode]
    );

    function setSnack(error, message, callback) {

        if (error) {
            setError(true);
        }
        else {
            setSuccess(true);
        }
        setsnack(true);
        setMessage(message);

        setTimeout(() => {
            setError(false);
            setSuccess(false);
            setMessage(false);
            setsnack(false);
            dispatch(callback());

        }, 5000)

    }

    const loginGroup = () => {
        return (
            <>
                <div className="btn-holder">

                    <div className="btn-container" style={{ justifyContent: 'right' }}>
                        <a className="btn" href="/login">login</a>
                    </div>
                    <div className="btn-container">
                        <a className="btn" style={{ background: '#0781db', color: 'white' }} href="/signup">signup</a>
                    </div>

                </div>

            </>
        )
    }


    const profileDialogueSchema = () => {
        return [
            {
                name: "Profile",
                url: "/home",
            },
            {
                name: "Login",
                url: "/login",
            },
            {
                name: "Register",
                url: "/signup",
            },
            {
                name: sm ? "loginGroup" : null,
                url: null
            }
        ]
    }

    const menuList = () => {
        const list = [
            { label: "Home", url: '/' },
            { label: 'Editor', url: '/editor' },
            { label: 'Contact us', url: '/' },
            { label: 'About us', url: '/' },
            { label: 'Feedback', url: '/' }
        ]
        return (
            <>
                <Box
                    sx={{ width: 250, height: 'fit-content' }}
                    role="presentation"
                    onClick={closeMenu}
                    onKeyDown={closeMenu}
                >
                    <List>
                        {list && list.map((e, i) => {
                            return <>

                                <a className="link" href={e?.url}>
                                    <ListItem button key={i} className="link">
                                        <ListItemText primary={e?.label}
                                            className="link"
                                        >{e?.label}</ListItemText>
                                    </ListItem>
                                </a>

                            </>
                        })}
                    </List>
                </Box>
            </>
        )
    }

    const openMenu = () => {
        setMenu(true)
    }

    const closeMenu = () => {
        setMenu(false)
    }

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 6000)
    }, [])

    useEffect(() => {
        document.body.style.background = muiTheme.palette.background.default;
        document.body.style.color = muiTheme.palette.text.primary;
    }, [muiTheme.palette.background.default, muiTheme.palette.text.primary]);


    return (
        <ThemeProvider theme={muiTheme}>
            <>


                <head>
                    <title>Workkersnow</title>
                </head>

                <AppBar position="fixed" color="primary" elevation={2}>
                    <Toolbar sx={{ position: 'relative', minHeight: 64 }}>
                        {/* Left: Menu Button */}
                        <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', pl: 1 }}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={openMenu}
                            >
                                <Icons type={'menu'} />
                            </IconButton>
                        </Box>

                        {/* Center: Logo & Title */}
                        <Box sx={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'none'
                        }}>
                            <IconButton
                                sx={{
                                    width: 48,
                                    height: 48,
                                    bgcolor: muiTheme.palette.background.paper,
                                    mr: 2,
                                    borderRadius: '50%',
                                    boxShadow: 1,
                                    pointerEvents: 'auto'
                                }}
                                disableRipple
                                disableFocusRipple
                            >
                                <BoltIcon sx={{ color: muiTheme.palette.primary.main, fontSize: 36 }} />
                            </IconButton>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    fontWeight: 700,
                                    background: mode === "light"
                                        ? 'linear-gradient(90deg, #97d3ff 0%, #ffffff 100%)'
                                        : 'linear-gradient(90deg, #23272a 0%, #0781db 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    cursor: 'pointer',
                                    pointerEvents: 'auto'
                                }}
                                onClick={() => window.location.href = '/'}
                            >
                                Workkersnow
                            </Typography>
                        </Box>

                        {/* Right: Actions/Profile & Theme Toggle */}
                        <Box sx={{ position: 'absolute', right: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', pr: 2 }}>
                            <IconButton
                                sx={{ mr: 2 }}
                                color="inherit"
                                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                            >
                                {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
                            </IconButton>
                            {!sm && (
                                <>
                                    <Button color="inherit" href="/login" sx={{ fontWeight: 600 }}>
                                        Login
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        href="/signup"
                                        sx={{ fontWeight: 600, ml: 1 }}
                                    >
                                        Signup
                                    </Button>
                                </>
                            )}
                            <IconButton
                                color="inherit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setProfileDialogue(true);
                                    setAnchorEl(e.target);
                                }}
                                sx={{ ml: 2 }}
                            >
                                <Icons type='profile' />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {/* Spacer to offset fixed header height */}
                <Toolbar />
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    elevation={0}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={profileDialogue}
                    onClose={(e) => {
                        e.preventDefault();
                        setProfileDialogue(false);
                    }}
                    PaperProps={{
                        style: {
                            marginTop: '50px',
                            background: 'white',
                            boxShadow: '0px 0px 8px 1px gray',
                            color: 'gray',
                            padding: '9px',
                        },
                    }}
                >
                    {
                        profileDialogueSchema() && profileDialogueSchema()?.map((e, i) => {
                            return <>
                                {!e?.name ?
                                    <></> :
                                    e?.name == "loginGroup" ?
                                        loginGroup() :
                                        <a href={e?.url} className="link" >
                                            <MenuItem key={i}>{e?.name}</MenuItem>
                                        </a>

                                }

                            </>
                        })
                    }
                </Menu>


                <Drawer
                    anchor="left"
                    open={menu}
                    onClose={closeMenu}
                >
                    {menuList()}
                </Drawer>
                <Box
                    className="children"
                    sx={{
                        background: muiTheme.palette.background.default,
                        minHeight: "calc(100vh - 64px)",
                        color: muiTheme.palette.text.primary,
                        transition: "background 0.3s, color 0.3s"
                    }}
                >
                    {/* {loading && <BoxLoading /> } */}
                    {/* {loading && <SimpleLoading /> } */}
                    <Outlet context={{ setSnack: setSnack }} />
                </Box>
                {message && error && <SnackBars error={true} open={snack} message={message} />}
                {message && succes && <SnackBars error={false} open={snack} message={message} />}
                {/* <Footer /> */}
            </>
        </ThemeProvider>
    )

}

export default Layout;