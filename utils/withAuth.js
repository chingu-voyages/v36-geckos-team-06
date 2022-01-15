/* eslint-disable react-hooks/exhaustive-deps */
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
    const authLandlord = token != null && JSON.parse(token);

    useEffect(() => {
      if (!token) {
        Router.replace(`/`);
        return null;
      }

      if (token && authLandlord.role === 'landlord') {
        Router.replace(`/landlord/dashboard`);
        return null;
      }
    }, [token]);

    return <WrappedComponent {...props} />;
  }
  return null;
};

export default withAuth;
