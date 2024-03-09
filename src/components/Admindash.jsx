import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Admindash = () => {
  return (
    <div>
        <Box sx={{flexGrow:1}}>
        <AppBar position="static">
            <Toolbar>
                <IconButton 
                 size="large"
                 edge="start"
                 color="inherit"
                 aria-label="menu"
                 sx={{mr:2}}
                 >
                  
                   <MenuIcon>  Add course </MenuIcon>
                  
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow:1}}>
                  Admin Dashboard
                </Typography>
                <Button color="inherit"><Link to='/Coursemanage' > Add Course </Link>  </Button>
                <Button color="inherit"><Link to='/Courseview' > Course View </Link>  </Button>
                <Button color="inherit"><Link to='/Coursetype' > Add course Type </Link>  </Button>
            </Toolbar>
        </AppBar>

      </Box>
    </div>
  )
}

export default Admindash