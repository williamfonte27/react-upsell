import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { Interfaces } from "./pages/Interfaces";
import { Send } from "./pages/Send";
import { Transactions } from "./pages/Transactions";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/interfaces" element={<Interfaces />} />
            <Route path="/send" element={<Send />} />
            <Route path="/transactions" element={<Transactions />} />
            </Routes>
        </Router>
    )
}