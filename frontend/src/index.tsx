import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import Donate from './pages/Donate/Donate';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
);
