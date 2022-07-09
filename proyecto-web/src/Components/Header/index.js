import Logo from "../Logo";
import SearchBar from "../SearchBar";
import {FaUserCircle} from "react-icons/fa"
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Header(){

    const navigate = useNavigate();

    return (
        <>
            <div className="flex px-4 md:px-8 lg:px-20 py-4 bg-white shadow-md m-auto relative">
                <div className="w-1/2 container">
                    <Logo width="w-20" height="h-20"/>
                </div>
                <div>
                    <SearchBar></SearchBar>
                </div>
                <div className="w-1/2 flex gap-3 items-center justify-end">
                    <h2 className="">Bienvenido, Usuario!</h2>
                    <button onClick={() => navigate("/profile")}>
                        <FaUserCircle size="1.5rem" />
                    </button>
                    <button>
                        <RiLogoutBoxRLine size= "1.5rem" />
                    </button>
                </div>
            </div>

        
        </>


    )
}

export default Header;