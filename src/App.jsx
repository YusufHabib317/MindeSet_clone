import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/HomeLayout/Home";

const router = createBrowserRouter([
  {
    path: "/MindeSet_clone",
    element: <Home />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
