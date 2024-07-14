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

export default function App() {
  return <RouterProvider router={router} />
}
