import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";

function Home() {
    const theme = useSelector((state) => state.app.theme);
  
    const dispatch = useDispatch();
  
    return (
      <>
        <Header />
        <SideBar />
        <div>
          <h1>¡Bienvenidos!</h1>
        </div>
      </>
    );
  }
  
  export default Home;
  