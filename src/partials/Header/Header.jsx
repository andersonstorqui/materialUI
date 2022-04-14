import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react"
import HomeIcon from '@mui/icons-material/Home';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useHistory } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

export const Header = ({ user }) => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleChange = () => {
        setMenuOpen(!menuOpen)
    }

    const history = useHistory()

    const handleMenuClick = (router) => {
        history.push(router)
        handleToggleChange()
    }
    console.log(user)

    return (
        <>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => handleToggleChange()}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  >
                        News
                    </Typography>
                    {
                        user.logged ?
                            <Typography variant="h6">{user.email}</Typography>
                            :
                            <Button color="inherit">Login</Button>
                    }
                </Toolbar>
            </AppBar>
            <Drawer open={menuOpen} onClose={() => handleToggleChange()}>
                <ListItem button onClick={() => handleMenuClick("/")} >
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </ListItem>
                <ListItem button onClick={() => handleMenuClick("/customer")}>
                    <ListItemIcon><GroupAddIcon /></ListItemIcon>
                    <ListItemText>Lista de clientes</ListItemText>
                </ListItem>
                <ListItem button onClick={() => handleMenuClick("/customer/add")}>
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                    <ListItemText>Cadastro de clientes</ListItemText>
                </ListItem>
                <ListItem button onClick={() => handleMenuClick("/customer/edit")}>
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                    <ListItemText>Alterar informações de clientes</ListItemText>
                </ListItem>
            </Drawer>
        </>
    )
}