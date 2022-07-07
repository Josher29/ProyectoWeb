import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import Creatable, { useCreatable } from "react-select/creatable";
import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";
import NewThemeForm from "../../Components/NewThemeForm";


function NewTheme(){
    return(
    <>
    <div>
        <Header />
        <SideBar />
    </div>
    <div className="h-screen" >
            <NewThemeForm />
    </div>
    </>
    )
}

export default NewTheme;