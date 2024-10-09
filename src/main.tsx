import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import '@radix-ui/themes/styles.css';

import Root from './routes/root.tsx';
import About from './routes/about.tsx';
import ErrorPage from "./error-page";
import Works from './routes/works.tsx';
import Contacts from './routes/contacts.tsx';
import Projects from './routes/projects.tsx';

const router = createBrowserRouter([
  {
    path: "/about",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "works",
        element: <Works />,
      },
    ]
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
