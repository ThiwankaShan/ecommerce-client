import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Navbar: React.FC = () => {
    const handleMenu = () => {
        console.log('Menu clicked')
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }} color={"#162427"}>
                            News
                        </Typography>
                        <div>
                            <IconButton
                                size="small"
                                onClick={handleMenu}
                            >
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
