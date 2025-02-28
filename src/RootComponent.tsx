import { Outlet } from 'react-router-dom';

function RootComponent() {
  return (
    <div>
      <h1>I am root layout</h1>
      <Outlet />
    </div>
  );
}

export default RootComponent;
