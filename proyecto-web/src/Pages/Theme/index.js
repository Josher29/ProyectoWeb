import { useState } from "react";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import Entry from"../../Components/Entry";


function Theme(){
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
                                src={"https://i0.wp.com/amprensa.com/wp-content/uploads/2021/01/1ec5ca1f-54ec-404a-b5a9-6837d05eeaeb.jpg?fit=1200%2C628&ssl=1?v=1610391206"}
                    />
                    <h1 className="font-bold text-3xl">Nombre del tema</h1>
                    <h2 className="font-bold">Descripción</h2>
                    <div className="justify-center text-center">
                        <h2 className="font-bold text 2xl"> Publicaciones </h2>
                        <div>
                            <Entry />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Theme;