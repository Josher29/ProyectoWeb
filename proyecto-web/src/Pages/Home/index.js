import { useDispatch, useSelector } from "react-redux";

function Home() {
    const theme = useSelector((state) => state.app.theme);
  
    const dispatch = useDispatch();
  
    return (
      <div>
        <h1>¡Bienvenidos!</h1>
      </div>
    );
  }
  
  export default Home;
  