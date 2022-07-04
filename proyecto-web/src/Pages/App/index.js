import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "../../Components/MainContainer";
import Spinner from "../../Components/Spinner";
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import NewTheme from "../NewTheme";

function App() {
  const loading = useSelector(
    (state) => state.app.loading
  );

  

  return loading ? (
    <Spinner/>
  ) : (
    <MainContainer>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="new-theme" element={<NewTheme />} />
            </Routes>
        </BrowserRouter>
    </MainContainer>
  );
}

export default App;
