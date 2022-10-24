import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Common/Footer/Footer";
import Header from "./Components/Common/Header/Header";
const Home = React.lazy(() => import("./Pages/Home/Home"));

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Suspense fallback={<>loading ...</>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
