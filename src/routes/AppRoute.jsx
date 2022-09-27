import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../components/UI/Loading";

const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const FoodPage = lazy(() => import("../pages/FoodPage/FoodPage"));

export default function AppRoute() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/food" element={<FoodPage />} />
      </Routes>
    </Suspense>
  );
}
