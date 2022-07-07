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
        <>
                <div className="m-10">
                    <p className="text-5xl">Crear tema</p>
                        <form>
                            <div>
                                <label>
                                    Portada:
                                    <div>
                                        <input type="file" onChange={onImageChange} />
                                        <div className="self-center">
                                            <img
                                            className="mx-2 my-1 object-center object-cover  p-2 w-32 h-32 rounded-full"
                                            src={img}
                                            />
                                        </div>
                                    </div>
                                </label>
                            </div>
                                <div>
                                <label>
                                    Nombre del tema:
                                    <div>
                                        <input 
                                        type="text" 
                                        name="name" 
                                        className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-grey-darker"
                                        placeholder="Nombre del tema"
                                        />
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Tipo:
                                    <Creatable
                                        className="w-1/2"
                                        placeholder="Seleccione un tipo"
                                        options={options} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Descripción:
                                    <div>
                                        <input 
                                        type="text" 
                                        name="Descripción" 
                                        className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-grey-darker"
                                        placeholder="Escriba la descripción del tema"
                                        />
                                    </div>
                                </label>
                            </div>
                            <div className="w-1/2 flex justify-center">
                                <button
                                    className="h-[48px] w-1/4 mt-2 rounded-md bg-sky-500 text-white"
                                    onClick={() => {}}
                                >
                                Crear tema
                                </button>   
                            </div>
                        </form>
                    </div>
        </>
    );
}

export default NewThemeForm