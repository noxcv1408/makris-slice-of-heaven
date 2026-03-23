import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

const HomePage = lazy(() => import("./pages/HomePage"));
const OrderPage = lazy(() => import("./pages/OrderPage"));

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Suspense
        fallback={
          <main className="flex min-h-[60vh] items-center justify-center bg-background px-4 pt-32">
            <div className="text-center">
              <p className="font-display text-sm tracking-[0.3em] text-primary">MAKRIS</p>
              <p className="mt-3 text-sm text-foreground/70">Caricamento in corso...</p>
            </div>
          </main>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ordina" element={<OrderPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
