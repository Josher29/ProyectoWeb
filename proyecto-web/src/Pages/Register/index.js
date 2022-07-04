import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Register(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [passwordChanged, setPasswordChanged] = useState(false);
    const [passwordError, setPasswordError] = useState (false);
  
    const theme = useSelector((state) => state.app.theme);
    const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);
    const errorMessage = useSelector((state) => state.user.errorMessage);

    useEffect((e) => {

        if(passwordChanged){
            if(password === passwordConfirmation){
                setPasswordError(false);
                setPasswordChanged(false);
            }
            else {
                setPasswordError(true);
            }
        }
    },[passwordConfirmation,passwordChanged,password]
    )

    const handlerPassConf = (e) => {
        setPasswordConfirmation(e.target.value);
        setPasswordChanged(true);
    }

    return (
        <div className="flex items-center justify-center h-screen">
           <div className="text-center">
                <div className="mb-4">
                    <input
                        placeholder="Usuario"
                        className={`placeholder:text-black pl-4 h-[48px] w-full rounded-md ${theme.inputBg} ${theme.inputText}`}
                        value={username}
                        onChange={(evt) => {
                            setUsername(evt.target.value);
                        }}
                    />
                </div>
                <div className="mb-4">
                    <input
                        placeholder="Email"
                        className={`placeholder:text-black pl-4 h-[48px] w-full rounded-md ${theme.inputBg} ${theme.inputText}`}
                        value={email}
                        onChange={(evt) => {
                            setEmail(evt.target.value);
                        }}
                    />
                </div>
                <div className="mb-4">
                    <input
                        placeholder="Contraseña"
                        className={`placeholder:text-black pl-4 h-[48px] w-full rounded-md ${theme.inputBg} ${theme.inputText}`}
                        type="password"
                        value={password}
                        onChange={(evt) => {
                            setPassword(evt.target.value);
                        }}
                    />
                    {passwordError && passwordChanged ?
                        <div>
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Las contraseñas no coinciden!</p>
                        </div>
                        : "" }
                </div>
                <div className="mb-4">
                    <input
                        placeholder="Confirmar Contraseña"
                        className={`placeholder:text-black pl-4 h-[48px] w-full rounded-md ${theme.inputBg} ${theme.inputText}`}
                        type="password"
                        value={passwordConfirmation}
                        onChange={(handlerPassConf)}
                    />
                </div>
                <button
                    className="h-[48px] w-full rounded-md bg-sky-500 text-white"
                    onClick={() => {
                    }}
                >
                    Registrarse
                </button>
            </div>
        </div>
    );
}