import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import SearchPage from "./pages/SearchPage";
import DinosaurPage from "./pages/DinosaurPage";
import NoPage from "./pages/NoPage";
import DinoOfTheDay from "./pages/DinoOfTheDay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="dinosaurs/:dino" element={<DinosaurPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <DinoOfTheDay />
    </BrowserRouter>
  );
}

export default App;
