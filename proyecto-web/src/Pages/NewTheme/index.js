import { useDispatch, useSelector } from "react-redux";
import Creatable, { useCreatable } from "react-select/creatable";
import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";

const options = [
    {value: "deportes", label: "Deporte"},
    {value: "musica", label: "Música"}
]

export default function NewTheme(){
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
                            <input type="text" name="name"/>
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
                            <input type="text" name="Descripción"/>
                        </label>
                    </div>
                </form>
            </div>
        </div>
        </>
        
    );
}