import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
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
                   <MenuIcon></MenuIcon>
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow:1}}>
                  E-Learning platform
                </Typography>
              
              
                <Button type='submit' variant="outlined"><Link to='/Adminlogin'>LOGIN</Link> </Button><br/><br/>
                
            </Toolbar>
        </AppBar>

      </Box>

    </div>
  )
}

export default Home