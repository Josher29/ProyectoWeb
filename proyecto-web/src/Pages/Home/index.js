import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";

function Home() {
    const theme = useSelector((state) => state.app.theme);
  
    const dispatch = useDispatch();
  
    return (
      <>
      <div className="m-auto max-w-5xl">
        <Header />
        <SideBar />
        <div >
          <h1>¡Bienvenidos!</h1>
        </div>
      </div>
        </>
    );
  }
  
  export default Home;
  