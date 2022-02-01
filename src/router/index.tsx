import React from 'react';
import { useRoutes } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import { Outlet } from 'react-router-dom';

const Test1: React.FC = () => {
  return <div>This is Test1 page</div>;
};

const Test2: React.FC = () => {
  return (
    <>
      <div>This is Test2 page</div> <Outlet />
    </>
  );
};

const AppRouter: React.FC = () => {
  const routes = [
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: 'test1',
      element: <Test1 />,
    },
    {
      path: 'test2',
      element: <Test2 />,
      children: [
        {
          path: 'test2-1',
          element: <div>This is Test2-1 page</div>,
        },
        {
          path: 'test2-2',
          element: <div>This is Test2-2 page</div>,
        },
      ],
    },
  ];
  const element = useRoutes(routes);

  return element;
};

export default AppRouter;
