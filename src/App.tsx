import { Route, Routes } from "react-router";
import "./App.css";
import { Suspense } from "react";
import { lazy } from "react";

const Layout = lazy(() => import("./layout/Layout"));
const MainContent = lazy(() => import("./components/MainContent"));
const ProductPage = lazy(() => import("./components/ProductPage"));
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainContent />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
