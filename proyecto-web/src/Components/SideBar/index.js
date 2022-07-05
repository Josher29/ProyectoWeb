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
            <div className="flex flex-col justify-center relative m-auto max-w-5xl float-left overflow-hidden bg-gradient-to-b from-[#7790ee] to-[#9bb1ff] min-h-[600px]" >
                <button className="m-12 h-2/3 w-2/3 p-5 rounded bg-[#fffb99]">Crear un tema</button>
                <h1 className="mx-12 text-lg w-2/3 text-center">Temas que sigues</h1>
                <div className="mx-12 bg-gray-400  min-h-[400px] w-2/3">

                </div>
            </div>
        </>
    )

}

export default SideBar;