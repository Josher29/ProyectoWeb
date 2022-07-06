import { useSelector, useDispatch } from "react-redux";
import {BiMessageSquareDetail, BiUser } from "react-icons/bi";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { IoMdCreate } from "react-icons/io";


const products = [
    {
      id: 1,
      name: "Patrón Duendecillo Repartidor",
      image: "https://ci0137.s3.amazonaws.com/amigurumis/products/1.jpg",
      price: 7.26,
    },
    {
      id: 2,
      name: "Patrón Amigurumi Pengui el Pingüino",
      image:
        "https://duendedeloshilos.es/wp-content/uploads/2019/02/ping%C3%BCino-amigurumi-2-350x400.jpg",
      price: 7.26,
    },
    {
      id: 3,
      name: "Patrón Amigurumi Mani el Mono",
      image:
        "https://duendedeloshilos.es/wp-content/uploads/2019/01/patrones-amigurumi-3-350x400.jpg",
      price: 7.26,
    },
    {
      id: 4,
      name: "PACK Amigurumis Prehistóricos",
      image:
        "https://duendedeloshilos.es/wp-content/uploads/2019/01/tricer%C3%A1tops-amigurumi-1-1-350x400.jpg",
      price: 7.26,
    },
  ];


function SideBar(){
    
    const dispatch = useDispatch();


    return (
        <>
      <aside className="float-left w-full md:w-[280px] lg:sticky lg:top-[80px] flex-1 lg:flex-initial  flex flex-col items-start justify-start   md:items-center mt-20  lg:min-h-[100vh]  my-10 lg:my-1  mx-2">
        <div className="w-full shadow-md rounded-xl py-1 bg-white  flex flex-column justify-center  flex-wrap items-center min-h-[200px]">
          <ul className="w-full  max-w-[100%]   flex flex-col justify-center items-center flex-wrap gap-3">
            <li className="p-3 mt-3 font-bold text-lg  flex  gap-5 flex-row items-center justify-center rounded-md
            bg-gradient-to-r from-[#e8d273] to-[#f8e181]">
              <IoMdCreate/>
              <a href="/">Crear Tema</a>
            </li>
          </ul>
          <div className="w-320">
                <h1 className="mx-12 text-lg">Temas que sigues</h1>
                <div className="mx-12 bg-gray-400 min-h-[400px]">
                </div>
              </div>
        </div>
        
      </aside>
        </>
    )

}

export default SideBar;