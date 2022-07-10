import { useEffect} from "react";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import Entry from"../../Components/Entry";
import ThemeEntries from "../../Components/ThemeEntries";
import { useDispatch, useSelector } from "react-redux";
import { getThemeByName } from "../../Slices/themeSlice";
import { useParams } from "react-router-dom";


function Theme(){
    const theme = useSelector(
        (state) => state.theme.theme
    );
    const {themeName} = useParams();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getThemeByName(themeName));
    },[dispatch,themeName])

    return(
        <>
            <div>
                <Header/>
                <SideBar />
            </div>
            <div className="h-screen bg-gray-50">
                <div className="contents">
                    <img
                                className="mx-2 my-1 object-center object-cover  p-2 w-32 h-32 rounded-full"
                                alt="perfil"
                                src={theme.photo}
                    />
                    <h1 className="font-bold text-3xl">{theme.name}</h1>
                    <h2 className="font-bold">{theme.description}</h2>
                    <div className="justify-center text-center">
                        <h2 className="font-bold text 2xl"> Publicaciones </h2>
                        <div>
                            <Entry />
                            <ThemeEntries theme={theme.name}></ThemeEntries>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Theme;