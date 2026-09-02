
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../Admin/Layouts/AdminLayout";
import { Dashboard } from "@mui/icons-material";
import StoreList from "../Admin/Pages/Stores/StoreList";
import StoreCreate from "../Admin/Pages/Stores/StoreCreate";
import StoreEdit from "../Admin/Pages/Stores/StoreEdit";
import StoreDetails from "../Admin/Pages/Stores/StoreDetails";
const AppRoutes=()=>{
   return(
    <Routes>
        <Route path="/admin" element={<AdminLayout/>}/>
        <Route path="dashboard" element={<Dashboard/>} />   
        <Route path="stores" element={<StoreList />} />
        <Route path="stores/create" element={<StoreCreate />} />
        <Route path="stores/edit/:id" element={<StoreEdit />} />
        <Route path="stores/:id" element={<StoreDetails />} />
    </Routes>
    )
}
export default AppRoutes;