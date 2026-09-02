import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";



const Sidebar=()=>{
    return (
      <Drawer sx={{
        width:240,
        flexShrink:0,"& .MuDrawer-paper":{
            width:240,
            boxSizing:"border-box"
        }
      }}>
        <Toolbar />
        <Box sx={{overflow:"auto"}}>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                         <DashboardIcon/>
                    </ListItemIcon>
                <ListItemText primary="Dashboard"/>
                </ListItemButton>    
                <ListItemButton>
                  <ListItemIcon>
                    <StoreIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Stores"/>
                </ListItemButton>       
                <ListItemButton>
                  <ListItemIcon>
                    <CategoryIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Categories"/>                 
                </ListItemButton>   
                <ListItemButton>
                  <ListItemIcon>
                    <InventoryIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Products"/>
                </ListItemButton>  
                <ListItemButton>
                  <ListItemIcon>
                    <ShoppingCartIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Orders"/>
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                   <PeopleIcon/>
                  </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Settings"/>
                </ListItemButton>
            </List>
        </Box>
      </Drawer>
    )
}
export default Sidebar;