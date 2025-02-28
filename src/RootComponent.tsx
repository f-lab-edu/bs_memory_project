import { Outlet } from 'react-router-dom';

function RootComponent() {
  return (
    <div className='responsiveContainer'>
      <Outlet />
    </div>
  );
}

export default RootComponent;
