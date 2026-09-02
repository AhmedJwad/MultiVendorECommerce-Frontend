
import { Box, Toolbar } from "@mui/material"
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout=()=>{
    return (
         <Box sx={{ display:"flex" }}>
           <Header/>
           <Sidebar/>
           <Box component="main" sx={{flexGrow:1, p:3}}>
            <Toolbar />
             <Outlet />
           </Box>
        </Box>
    )
}

export default AdminLayout;