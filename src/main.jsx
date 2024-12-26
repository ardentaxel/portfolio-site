import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorPage from "./errors/error-page";
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";
import About from './routes/about';
import Resume from './routes/Resume';
import Projects from './routes/Projects';
import Contact from "./routes/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <About/>
      },
      {
        path: "/resume",
        element: <Resume/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
