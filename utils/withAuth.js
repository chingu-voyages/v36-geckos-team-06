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
    const landlord = localStorage.getItem(`authLandlord`);
    const authLandlord = landlord != null && JSON.parse(landlord);

    useEffect(() => {
      if (!landlord) {
        Router.replace(`/`);
        return null;
      }

      if (landlord && authLandlord.role === 'landlord') {
        Router.replace(`/landlord/dashboard`);
        return null;
      }
    }, [landlord]);

    return <WrappedComponent {...props} />;
  }
  return null;
};

export default withAuth;
