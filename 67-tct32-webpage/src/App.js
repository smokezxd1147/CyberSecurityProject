import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import Login from "./components/Login";
import Registration from "./components/registration";
import Logout from "./components/Logout";
import Home from "./components/page";
import Form from "./components/Form"
//import { Protector } from "./helpers";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/Form" element={<Form />} />
          </Routes>
      </Container>
    </BrowserRouter>
        
  );
}

export default App;
