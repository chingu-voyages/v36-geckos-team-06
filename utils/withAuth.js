/* eslint-disable consistent-return */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const withAuth = (WrappedComponent) => (props) => {
  if (typeof window !== `undefined`) {
    const Router = useRouter();
    const token = localStorage.getItem(`authLandlord`);

    useEffect(() => {
      if (!token) {
        Router.replace(`/`);
        return null;
      }
    }, [Router, token]);

    if (token && authLandlord.role === 'landlord') {
      Router.replace(`/landlord/dashboard`);
      return null;
    }
    return <WrappedComponent {...props} />;
  }
  return null;
};

export default withAuth;
