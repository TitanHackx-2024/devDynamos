import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import AppRoutes from "./Routes.js";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
