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
        <div className="h-screen bg-gray-50">
          <div>
            <Post></Post>
            <div>
              <h1 className="font-bold text-center m-12">Feed</h1>
              <Entry></Entry>
            </div>
            
          </div>
        </div>
      </>
    );
  }
  
  
  export default Home;
  