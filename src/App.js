import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" index element={<Index />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
