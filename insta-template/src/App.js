import "./App.css";
import Content from "./components/layout/content/Content";
import Navbar from "./components/layout/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <Content />
    </div>
  );
}

export default App;
