import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Page } from "./page/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  }
]);

export function App() {
  return <RouterProvider router={router} />
}
