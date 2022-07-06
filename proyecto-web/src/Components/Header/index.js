import Logo from "../Logo";
import SearchBar from "../SearchBar";

function Header(){
    return (
        <>
            <div className="flex px-4 md:px-8 lg:px-20 py-4 bg-white shadow-md m-auto max-w-5xl relative">
                <div className="w-1/2 container">
                    <Logo width="w-20" height="h-20"/>
                </div>
                <div>
                    <SearchBar></SearchBar>
                </div>
                <div className="w-1/2 flex gap-3 items-center justify-end">
                    <h2 className="">Bienvenido, Usuario!</h2>
                </div>
            </div>

        
        </>


    )
}

export default Header;