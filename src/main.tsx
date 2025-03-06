import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@pages/home';
import Drilling from '@pages/drilling';
import RootComponent from './RootComponent.tsx';
import Exam from '@pages/exam';
import { getSeries } from './apis/series.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <RootComponent />,
    children: [
      {
        path: '/',
        loader: getSeries,
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
