/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getUserFromLocalStorage } from '../../../utils';

const Dashboard = () => {
  const tenant = getUserFromLocalStorage(`authTenant`);
  const Router = useRouter();

  useEffect(() => {
    if (!tenant) {
      // if landlord does not exist in local storage we push the user back to the home page where they have to sign in
      Router.replace(`/`);
      return null;
    }
    return null;
  }, [tenant]);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
