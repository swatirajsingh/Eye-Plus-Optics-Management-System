import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import Navbar from "./components/Navbar";
import Customers from "./pages/Customers";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/appointments"
          element={<Appointments />}
        />
<Route
  path="/customers"
  element={<Customers />}
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;