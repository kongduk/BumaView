import { AppRoutes } from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import Footer from "@/widget/Footer";
import Navbar from "@/widget/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
