import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@pages/home';
import Drilling from '@pages/drilling';
import RootComponent from './RootComponent.tsx';
import Exam from '@pages/exam';

const router = createBrowserRouter([
  {
    element: <RootComponent />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/drilling',
        element: <Drilling />,
      },
      {
        path: '/exam',
        element: <Exam />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
