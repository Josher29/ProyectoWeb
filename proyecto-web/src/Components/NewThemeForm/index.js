import React, { useState } from "react";
import Creatable, { useCreatable } from "react-select/creatable";

const options = [
    { value: "deportes", label: "Deporte" },
    { value: "musica", label: "Música" }
]

function NewThemeForm() {

    const [img, setImg] = useState();

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    };

    return (
            <div>
                <p className="text-5xl">Crear tema</p>
                <form>
                    <div>
                        <label>
                            Portada:
                            <div>
                                <input type="file" onChange={onImageChange} />
                                <img src={img} alt="" className= "scale-75 rounded-full block mt-2" />
                            </div>
                        </label>
                    </div>
                        <div>
                        <label>
                            Nombre del tema:
                            <div>
                                <input type="text" name="name" />
                            </div>
                        </label>
                    </div>
                    <div style={{ width: "500px" }}>
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
                                <input type="text" name="Descripción" />
                            </div>
                        </label>
                    </div>
                    <div style={{ width: "500px" }}>
                        <button
                            className="h-[48px] w-full rounded-md bg-sky-500 text-white"
                            onClick={() => {}}
                        >
                        Crear tema
                        </button>
                    </div>
                </form>
            </div>
    );
}

export default NewThemeForm