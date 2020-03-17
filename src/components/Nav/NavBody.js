import React from 'react';

//styled
import styled from 'styled-components';

//core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';

//icons
import MenuIcon from '@material-ui/icons/Menu';
const NavContainer = styled.div`
    .MuiAppBar-colorPrimary{
        // background-color:rgba(255,255,255,0);
        background-color:white;
        color:black;   
    }
    .MuiToolbar-regular{
        height:75px;
    }
`;
const NavBody = (props) => {
    return (
        <NavContainer>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        {/* <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton> */}
                        <Typography variant="h6"><img src='/NavLogoMultranslator.jpg' width={150} height={75}/></Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </NavContainer>
    );
}

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default NavBody;