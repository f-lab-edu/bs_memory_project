import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import RootComponent from '@/RootComponent';
import Loader from '@/shared/ui/Loader';
import Home from '@pages/home';
import { getSeries } from '@features/verseSelect/api/getSeries';
import { render } from '@/lib/test/testUtils/render';

const renderHome = () => {
  const router = createMemoryRouter([
    {
      element: <RootComponent />,
      HydrateFallback: Loader,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: getSeries,
        },
      ],
    },
  ]);
  render(<RouterProvider router={router} />);
};

export default renderHome;
