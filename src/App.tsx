import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Footer, Header } from "./components/layouts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
