import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PageWelcome } from "./pages/PageWelcome";
import { PageBooks } from "./pages/PageBooks";
import { PageAbout } from "./pages/PageAbout";

function App() {
  return (
    <div className="App">
      <h1>Personal Site</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" replace />} />
        <Route path="/welcome" element={<PageWelcome />} />
        <Route path="/books" element={<PageBooks />} />
        <Route path="/about" element={<PageAbout />} />
      </Routes>
    </div>
  );
}

export default App;
