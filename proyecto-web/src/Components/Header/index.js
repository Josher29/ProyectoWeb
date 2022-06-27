import Logo from "../Logo";

function Header(){
    return (
        <>
            <div className="flex px-4 md:px-8 lg:px-20 py-4 bg-amber-600">
                <div className="w-1/2">
                    <Logo width="w-20" height="h-20"/>
                </div>
                <div className="w-1/2 flex gap-3 items-center justify-end">
                    <h2 className="">Bienvenido, Usuario!</h2>
                </div>
            </div>

        
        </>


    )
}

export default Header;