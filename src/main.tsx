import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DrillingPage from '@pages/drilling';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getSeries } from '@apis/series';
import RootComponent from './RootComponent';
import Exam from '@pages/exam';
import Home from '@pages/home';
import RouteErrorElement from '@components/RouteErrorElement';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <RootComponent />,
    errorElement: <RouteErrorElement />,
    children: [
      {
        path: '/',
        loader: getSeries,
        element: <Home />,
      },
      {
        path: '/drilling',
        element: <DrillingPage />,
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
