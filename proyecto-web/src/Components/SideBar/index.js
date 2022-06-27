import { useSelector, useDispatch } from "react-redux";

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
            <aside className="flex flex-col justify-center relative w-80 mr-[20rem] float-left overflow-hidden bg-amber-600 min-h-[600px]" >
                <button className="m-12 h-2/3 w-2/3 p-5  rounded bg-red-400">Crear un tema</button>
                <h1 className="mx-12 text-lg">Temas que sigues</h1>
                <div className="mx-12 bg-gray-400 min-h-[400px]">

                </div>
            </aside>
        </>
    )

}

export default SideBar;