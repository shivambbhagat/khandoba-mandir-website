import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./PageTransition";
import Home from "@/pages/Home";
import History from "@/pages/History";
import Visit from "@/pages/Visit";
import Contact from "@/pages/Contact";
import JagaranGondal from "@/pages/JagaranGondal";
import Abhishek from "@/pages/Abhishek";
import Gallery from "@/pages/Gallery";
import Utsav from "@/pages/Utsav";
import NotFound from "@/pages/NotFound";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/history"
          element={
            <PageTransition>
              <History />
            </PageTransition>
          }
        />
        <Route
          path="/visit"
          element={
            <PageTransition>
              <Visit />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/jagaran-gondal"
          element={
            <PageTransition>
              <JagaranGondal />
            </PageTransition>
          }
        />
        <Route
          path="/abhishek"
          element={
            <PageTransition>
              <Abhishek />
            </PageTransition>
          }
        />
        <Route
          path="/gallery"
          element={
            <PageTransition>
              <Gallery />
            </PageTransition>
          }
        />
        <Route
          path="/utsav"
          element={
            <PageTransition>
              <Utsav />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
