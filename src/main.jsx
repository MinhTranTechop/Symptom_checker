import { createRoot } from "react-dom/client";
import "./index.css";
import Home_page from "./components/Home_page.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Option_question from "./components/Option_question.jsx";
import Question from "./components/Question.jsx";
import Result_1 from "./components/Result_1.jsx";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home_page /> },
      { path: "/Option", element: <Option_question /> },
      { path: "/skin", element: <Question condition="skin" /> },
      { path: "/intimate", element: <Question condition="intimate" /> },
      { path: "/result1", element: <Result_1 /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
