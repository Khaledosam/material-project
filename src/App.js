import Home from "pages/home/Home";
import Root from "./pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Create from "pages/create/Create";

import NotFound from "pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="Create" element={<Create />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
