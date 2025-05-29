import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
export default function LayoutHeader () {
    return (  
        <> <Header />
        <Outlet/>
        </>
    );
}
