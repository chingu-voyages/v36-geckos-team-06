/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import React from 'react';

const withAuth = (WrappedComponent) => (props) => {
  if (typeof window !== `undefined`) {
    const Router = useRouter();
    const token = localStorage.getItem(`authLandlord`);

    if (!token) {
      Router.replace(`/`);
      return null;
    }

    const authLandlord = token != null && JSON.parse(token);

    if (token && authLandlord.role === 'landlord') {
      Router.replace(`/landlord/dashboard`);
      return null;
    }
    return <WrappedComponent {...props} />;
  }
  return null;
};

export default withAuth;
