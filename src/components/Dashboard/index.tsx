import React from 'react';

interface IDashBoardProps {
  children?: React.ReactNode;
}

const Dashboard = ({ children }: IDashBoardProps): JSX.Element => {
  return <div>This is Dashboard page {children}</div>;
};
export default Dashboard;
