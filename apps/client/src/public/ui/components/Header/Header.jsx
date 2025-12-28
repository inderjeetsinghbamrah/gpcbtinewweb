import Navbar from "./Navbar.jsx";
import {Topbar} from "./Topbar.jsx";

const Header = ({instituteQuery}) => {
    return (
        <>
            <Navbar>
                <Topbar instituteQuery={instituteQuery}/>
            </Navbar>
        </>
    )
}

export default Header;