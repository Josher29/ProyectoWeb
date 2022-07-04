import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import Creatable, { useCreatable } from "react-select/creatable";
import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";

const options = [
    {value: "deportes", label: "Deporte"},
    {value: "musica", label: "Música"}
]

export default function NewTheme(){

    const [img, setImg] = useState();

    const onImageChange = (e) => {
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    };

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
                <p className="text-5xl">Crear tema</p>
                <form>
                    <div>
                        <label>
                            Nombre del tema:
                            <div>
                                <input type="text" name="name"/>
                            </div>
                        </label>
                    </div>
                    <div style={{width:"500px"}}>
                        <label>
                            Tipo:
                            <Creatable 
                            placeholder="Seleccione un tema"
                            options={options} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Descripción:
                            <div>
                                <input type="text" name="Descripción"/>
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            Portada:
                            <div>
                                <input type="file" onChange={onImageChange}/>
                                <img src={img} alt="" class="rounded-full block mt-2" />
                            </div>
                        </label>
                    </div>
                </form>
            </div>
        </div>
        </>
        
    );
}