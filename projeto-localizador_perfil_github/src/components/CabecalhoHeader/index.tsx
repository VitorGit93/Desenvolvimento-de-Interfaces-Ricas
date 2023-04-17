import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';

export function CabecalhoHeader() {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Icon sx={{ fontSize: 32 }} color="primary">
                    <i className="fab fa-github" />
                </Icon>
                <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1, ml: 1 }}>
                    Localizador de Perfis do Github
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
