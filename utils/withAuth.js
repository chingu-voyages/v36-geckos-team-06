/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

// This is a Higher Order Component that handles protected & authenticated routes

// A higher order component is simply a function that takes in a component as an argument and returns an enhanced version of thea component
const withAuth = (WrappedComponent) => (props) => {
  // This if statement ensures that we are in the browser environment before we access local storage, without this check we would always be returning redefined from local storage
  if (typeof window !== `undefined`) {
    const Router = useRouter();
    // Get and parse value from local storage if it exists so we can utilise the values
    const landlord = localStorage.getItem(`authLandlord`);
    const authLandlord = landlord != null && JSON.parse(landlord);

    const tenant = localStorage.getItem(`authTenant`);
    const authTenant = tenant != null && JSON.parse(tenant);

    // We only want the checks below to occur when the "landlord" status changes, for example when the details about the landlord is present in local storage anymore -> so we put it in a useEffect hook
    useEffect(() => {
      if (landlord && authLandlord.role === 'landlord') {
        // if the landlord does exist we push the landlord to the dashboard
        Router.replace(`/landlord/dashboard`);
        return null;
      }

      if (tenant && authTenant.role === 'tenant') {
        // if the landlord does exist we push the landlord to the dashboard
        Router.replace(`/tenant/dashboard`);
        return null;
      }

      // The dependency array that makes sure this effect only runs when the status of 'landlord' changes
    }, [landlord, tenant]);

    // Here we return the enhanced component and all its potential props
    return <WrappedComponent {...props} />;
  }
  return null;
};

// Usage || withAuth(Component)

export default withAuth;
