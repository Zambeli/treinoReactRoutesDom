import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";
import Menu from "./components/Menu";
import Rodape from "./components/Rodape";
import PaginaPadrao from "./components/PaginaPadrao";
import Post from "./pages/Post";
import NaoEncontrada from "../src/pages/NaoEncontrada/index.jsx";

function AppRoutes() {

  return (
    <BrowserRouter>

      <Menu/>

      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
        
           <Route index element={<Inicio/>}/>
           <Route path="sobremim" element={<SobreMim/>}/>
           <Route path="posts/:id" element={<Post/>}/>
        
        </Route>

        <Route path="*" element={<NaoEncontrada/>}/>

      </Routes>


      <Rodape/>

    </BrowserRouter>
  )

}

export default AppRoutes
