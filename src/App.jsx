import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import FavoritesPage from "./pages/FavoritesPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="flex bg-[#F5EBE0]">
      <Sidebar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
