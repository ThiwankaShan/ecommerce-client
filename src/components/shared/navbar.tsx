import { AppBar, Avatar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar: React.FC = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ backgroundColor: "white" }}>
                    <div className="content-wrapper">
                        <Toolbar className="content-container" style={{ backgroundColor: "white" }}>
                            <Container sx={{ flexGrow: 1 }} style={{ marginLeft: "0px", padding: "0px" }}>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <Typography variant="h6" color={"#162427"}>
                                        E-Commerce
                                    </Typography>
                                </Link>
                            </Container>
                            <div>
                                <IconButton
                                    size="small"
                                >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </IconButton>
                            </div>
                        </Toolbar>
                    </div>
                </AppBar>
            </Box>
        </>
    )
}
