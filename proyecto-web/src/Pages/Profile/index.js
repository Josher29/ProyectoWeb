import { useState } from "react";
import Header from "../../Components/Header";

function Profile (){
    return(
        <>
        <div>
            <Header />
        </div>
        <div className="lg:max-w-4xl max-w-full mx-auto flex items-center justify-center flex-col">
            <div className="flex my-3 py-2   w-full flex-row flex-wrap items-center justify-center gap-3 min-h-[50px] text-slate-900">
                <div className="self-center">
                    <img
                    className="mx-2 my-1 object-center object-cover  p-2 w-32 h-32 rounded-full"
                    alt="perfil"
                    src={"https://scontent.fsjo12-1.fna.fbcdn.net/v/t1.6435-9/29249653_1867862393237318_1048193034946084864_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dFa4pCMlswEAX923kiX&_nc_ht=scontent.fsjo12-1.fna&oh=00_AT-N3LsMQy9YjvL8MkpzyczzOR2fGxypd9HMIe2GpPa8yw&oe=62EA0288"}
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-3 ">
                    <div className="flex items-center w-full flex-wrap md:justify-start justify-center  gap-3">
                        <h1 className="font-bold text-lg">{"David"}</h1>
                        <button
                        className="h-[48px] w-full rounded-md bg-sky-500 text-white"
                        margin="1"
                        size="xs"
                        bgColor="bg-deepBlue"
                        textColor="white"
                        title="Edit Profile"
                        onClick={() => {}}>
                        Editar el perfil
                        </button>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-3 flex-wrap">
                        <h1 className="text-black">
                            <b className="text-slate-900"> {0}</b>{" "}
                            Reacciones
                        </h1>
                        <h1>
                            <b className="text-slate-900"> {0}</b> Posts
                        </h1>
                    </div>
                    <div className="flex md:self-start self-center">
                        <p className="font-normal text-sm text-black opacity-80">
                        Descripción del perfil 🚀
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
                <h1 className="text-2xl py-2 text-slate-900 font-bold">
                    {0 ? "Tus publicaciones" : "Sin publicaciones"}
                </h1>
            </div>
        </div>
        </>
    )
}

export default Profile;