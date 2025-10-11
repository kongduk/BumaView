import React, { useState } from "react";
import { AppRoutes } from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import Footer from "@/widget/Footer";
import Navbar from "@/widget/Navbar";
import initialResumes from "@/data/resumes";

function App() {
  const [resumes, setResumes] = useState(initialResumes);

  const handleAddResume = (newResume) => {
    setResumes(prevResumes => [...prevResumes, { ...newResume, id: prevResumes.length + 1 }]);
  };

  const handleUpdateResume = (updatedResume) => {
    setResumes(prevResumes => prevResumes.map(r => r.id === updatedResume.id ? updatedResume : r));
  };

  const handleDeleteResume = (id) => {
    setResumes(prevResumes => prevResumes.filter(r => r.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes 
        resumes={resumes}
        handleAddResume={handleAddResume}
        handleUpdateResume={handleUpdateResume}
        handleDeleteResume={handleDeleteResume}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
