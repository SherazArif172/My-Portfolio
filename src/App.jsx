import ParentHome from "./Components/ParentHome";
import ParentAbout from "./Components/About/AboutParent";
import Navbar from "./Components/Navbar";
import ParentProjects from "./Components/Projects/ParentProjects";
import { Routes, Route } from "react-router-dom";
import Connects from "./Components/Connect";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<ParentHome />} />
        {/* <Route  element={<ParentHome />} /> */}
        <Route path="/about" element={<ParentAbout />} />
        <Route path="/project" element={<ParentProjects />} />
      </Routes>
      <Connects />
    </>
  );
}

export default App;
