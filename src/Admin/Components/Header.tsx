import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import NotificationsIcon from "@mui/icons-material/Notifications";
const Header=()=>{
    return(
        <AppBar position="fixed" sx={{zIndex:(theme)=>theme.zIndex.drawer +1}}>
            <Toolbar>
            <Typography variant="h6" noWrap component="div">
                Multi-Vendor E-Commerce
            </Typography>
            <Box sx={{flexGrow:1}}/>
            <IconButton color="inherit">
                <NotificationsIcon />
            </IconButton>
            <Typography sx={{ml:2}}>
                Admin
            </Typography>
              </Toolbar>
        </AppBar>
    )
}

export default Header;