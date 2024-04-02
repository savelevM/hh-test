import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/Main";
import Post from "./pages/Post";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<Post />} />
      </Route>
    </>
  ),
  { basename: "/hh-test" }
);
