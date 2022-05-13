import React from 'react';
import { useGetUserQuery } from '../store/user';

const Dashboard: React.FC<{}> = () => {
  const { data: user, isLoading } = useGetUserQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>Welcome to the dashboard, {user?.firstName}!</div>;
};

export default Dashboard;
