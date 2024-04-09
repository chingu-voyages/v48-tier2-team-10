import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import SearchPage from "./pages/SearchPage";
import DinosaurPage from "./pages/DinosaurPage";
import NoPage from "./pages/NoPage";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="dinosaurs/:dino" element={<DinosaurPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
