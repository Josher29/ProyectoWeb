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
    </div>
    <div className="grid grid-cols-2 gap-0">
        <div>
            <SideBar />
        </div>
        <div>
            <NewThemeForm />
        </div>
    </div>
    </>
    )
}

export default NewTheme;