import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "sonner";

// import { AuthProvider } from "./components/AuthProvider";

// Import your application pages
import HomePage from "./routes/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Add other application routes here */}
        </Routes>
      </BrowserRouter>

      <Toaster position="top-right" />
    </>
  );
}

export default App;
