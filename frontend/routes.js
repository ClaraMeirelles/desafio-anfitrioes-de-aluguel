import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/acomodacoes" element={<Accommodation />} />
                <Route path="/acomodacoes/:id" element={<Accommodation />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
