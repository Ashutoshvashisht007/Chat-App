import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";

const SideBar = lazy(() => import("./components/sideBar"));

const App = () => {
  return (
    <div className="flex justify-center items-center" style={{height: "calc(100vh - 40px)"}}>
      <Router>
        <SideBar />
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App