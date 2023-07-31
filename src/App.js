
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";

export default function App() {
  return (
    // Use react router to create Routes for required pages
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:number" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);