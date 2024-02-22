import SideNav, {NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav"
import "@trendmicro/react-sidenav/dist/react-sidenav.css"
import { useNavigate } from "react-router-dom"
function AdminSideNav()
{
    const navigate = useNavigate();
return (
    
    <SideNav
     onSelect ={selected => {
        //console.log(selected)
        navigate("/admin/"+selected)
     }}>
        <SideNav.Toggle/>
        <SideNav.Nav defaultSelected="AdminHome">
            <NavItem eventKey="AdminHome">
                <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: "1.5em"}}/></NavIcon>
                <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="Users">
                <NavIcon><i className="fa fa-fw fa-users" style={{ fontSize: "1.5em"}}/></NavIcon>
                <NavText>Users</NavText>
            </NavItem>
            {/*<NavItem eventKey="AdminCategory">
                <NavIcon><i className="fa fa-fw fa-users" style={{ fontSize: "1.5em"}}/></NavIcon>
                <NavText>Categories</NavText>
    </NavItem>*/}
            <NavItem eventKey="AdminProducts">
                <NavIcon><i className="fa fa-fw fa-list" style={{ fontSize: "1.5em"}}/></NavIcon>
                <NavText>Products</NavText>
            </NavItem>
            <NavItem eventKey="AdminOrders">
                <NavIcon><i className="fa fa-fw fa-list" style={{ fontSize: "1.5em"}}/></NavIcon>
                <NavText>Orders</NavText>
            </NavItem>
        </SideNav.Nav>
     </SideNav>
)
}

export default AdminSideNav;