import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Register(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    const theme = useSelector((state) => state.app.theme);
    const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);
    const errorMessage = useSelector((state) => state.user.errorMessage);

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
                </div>
                <div className="mb-4">
                    <input
                        placeholder="Confirmar Contraseña"
                        className={`placeholder:text-black pl-4 h-[48px] w-full rounded-md ${theme.inputBg} ${theme.inputText}`}
                        type="password"
                        value={passwordConfirmation}
                        onChange={(evt) => {
                            setPasswordConfirmation(evt.target.value);
                            if(password !== passwordConfirmation){
                                console.log("Las contraseñas no coinciden");
                            }
                        }}
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