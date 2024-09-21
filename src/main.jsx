import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import "./index.scss";
import About from "./routes/About";
import Auth from "./routes/Auth";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Products from "./routes/Products";
import { ContextProvide } from "./routes/Products/components/context";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} />
      <Route path="auth/:action" element={<Auth />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvide>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvide>
  </StrictMode>
);
