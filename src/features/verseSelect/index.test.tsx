import { expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import RootComponent from '@/RootComponent.tsx';
import Home from '@pages/home';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render } from '@/test/test-utils.tsx';
import { SERIES_DATA } from '@/mock/mockData.ts';
import Loader from '@/shared/ui/Loader';
import { getSeries } from '@features/verseSelect/api/getSeries';

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
