import { useDispatch } from "react-redux";
import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";
import Post from "../../Components/Post";
import Entry from "../../Components/Entry";

function Home() {
  
    const dispatch = useDispatch();
  
    return (
      <>
        <div>
          <Header />
          <SideBar></SideBar>
        </div>
        <div>
          <Post></Post>
          <Entry></Entry>
        </div>
      </>
    );
  }
  
  
  export default Home;
  