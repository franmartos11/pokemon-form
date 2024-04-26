import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/formularioIngreso" element={<Formulario />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
