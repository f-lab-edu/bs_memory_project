import { Outlet } from 'react-router-dom';

function RootComponent() {
  return (
    <div className='responsiveContainer'>
      <div className='flex w-full flex-col items-center justify-center'>
        <Outlet />
      </div>
    </div>
  );
}

export default RootComponent;
