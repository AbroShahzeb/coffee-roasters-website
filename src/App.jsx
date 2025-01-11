import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { CreateYourPlan } from "./pages/createYourPlan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create-your-plan" element={<CreateYourPlan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
