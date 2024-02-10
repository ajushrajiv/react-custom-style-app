import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from "./components/layout/content/Content";
import Navbar from "./components/layout/navbar/Navbar";
import ContentLeft from "./components/layout/content/content-left/ContentLeft";
import ContentRight from "./components/layout/content/content-right/ContentRight";
import TabDisplay from "./components/layout/tabdisplay/TabDisplay";
import Footer from "./components/layout/footer/Footer";
import LoginForm from "./components/common/forms/login-form/LoginForm";
import NavbarRight from "./components/layout/navbar/navbar-right/NavbarRight";

function App() {
  return (
    
  <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm />}/> 
        <Route path="/" element={
          <>
            <Content>
              <Routes>
                <Route path="/" element={<ContentLeft />}/>
                <Route path="/" element={<ContentRight />}/>
              </Routes>
            </Content>
            <Routes>
              <Route path="/" element= {<TabDisplay />}/>
            </Routes>
            <Footer />
          </>
        }/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
