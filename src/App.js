import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PasteView from "./PasteView";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/p/:id" element={<PasteView />} />
      </Routes>
    </BrowserRouter>
  );
}
