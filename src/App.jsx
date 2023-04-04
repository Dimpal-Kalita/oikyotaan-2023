import { Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./Components";

import { Error, Home, Gallery, Events, Artist } from "./Pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/artists" element={<Artist />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
