import { expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import RootComponent from '@/RootComponent';
import Home from '@pages/home';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Loader from '@components/Loader';
import { render } from '@/test/test-utils';
import { getSeries } from '@apis/series';
import { SERIES_DATA } from '@/mock/mockData';

test('renders series tabs with loaded data', async () => {
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

  for (const data of SERIES_DATA) {
    const tab = await screen.findByRole('tab', { name: data.series_name });
    expect(tab.ariaExpanded).toBe('false');
  }
});
