import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";
import Post from "../../Components/Post";

function Home() {
    const theme = useSelector((state) => state.app.theme);
  
    const dispatch = useDispatch();
  
    return (
      <>
        <div>
          <Header />
          <SideBar></SideBar>
        </div>
        <div>
          <Post></Post>
        </div>
      </>
    );
  }
  
  
  export default Home;
  