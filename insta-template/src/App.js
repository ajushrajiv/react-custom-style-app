import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from "./components/layout/content/Content";
import Navbar from "./components/layout/navbar/Navbar";
import ContentLeft from "./components/layout/content/content-left/ContentLeft";
import ContentRight from "./components/layout/content/content-right/ContentRight";
import TabDisplay from "./components/layout/tabdisplay/TabDisplay";

function App() {
  return (
    
        <BrowserRouter>
          <Navbar />
          <Content>
            <Routes>
              <Route path="/" element={<ContentLeft />}/>
              <Route path="/" element={<ContentRight />}/>
              {/* <Route path="/" element={<ContentLinks />}/> */}
              {/* <Route path="/image-links" element={<ImageLinks />}/> */}  
            </Routes>
          </Content>
          <TabDisplay />
          <Routes>
            <Route path="/" element= {<TabDisplay />}/>
          </Routes>
        </BrowserRouter>
      
  );
}

export default App;
