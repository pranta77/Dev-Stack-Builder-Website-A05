import { Suspense } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import type TechnologyType from "./Type/Type";
import Technologies from "./components/Technologies/Technologies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const handleTechnology = async (): Promise<TechnologyType[]> => {
    const res = await fetch("/public/data/Technologie.json");
    const data = await res.json();
    return data;
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense
        fallback={
          <span className="loading loading-spinner text-error flex mx-auto loading-xl"></span>
        }
      >
        <Technologies handleTechnology={handleTechnology()}></Technologies>
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
