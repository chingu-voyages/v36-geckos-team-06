/* eslint-disable no-undef */
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMutation, gql, useApolloClient } from '@apollo/client';
import Layout from '../../components/common/auth/Layout';
import { Input } from '../../components/common/FormEl';
import { Form, Button, Info, Buttons } from '../../components/common/auth/Form';
import { SIGN_UP_LANDLORD } from '../../../services/mutation';

const Signup = () => {
  const client = useApolloClient();
  const router = useRouter();
  // set the default state of the form
  const [values, setValues] = useState({
    firstName: ``,
    lastName: ``,
    username: ``,
    email: ``,
    password: ``,
  });

  const [signUpLandlord, { loading, error }] = useMutation(SIGN_UP_LANDLORD, {
    onCompleted: (data) => {
      // store the authenticated landlord in local storage
      localStorage.setItem('authLandlord', JSON.stringify(data.signUpLandlord));
      // update the local cache
      client.writeQuery({
        query: gql`
          query getAuth {
            landlordIsLoggedIn
          }
        `,
        data: {
          landlordIsLoggedIn: true,
        },
      });
      // redirect landlord to dashboard
      router.push(`/landlord/dashboard`);
    },
  });

  // update the state when a user types in the form
  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <Layout>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          signUpLandlord({
            variables: {
              ...values,
            },
          });
        }}
      >
        <Info>
          <h1>SIGN UP</h1>
          <p>LANDLORD</p>
        </Info>

        <Input
          name="firstName"
          type="text"
          id="firstName"
          onChange={onChange}
          value={values.firstName}
          placeholder="First Name"
        />

        <Input
          name="lastName"
          type="text"
          id="lastName"
          onChange={onChange}
          value={values.lastName}
          placeholder="Last Name"
        />

        <Input
          name="email"
          type="email"
          id="email"
          onChange={onChange}
          value={values.email}
          placeholder="Email Address"
        />

        <Input
          name="password"
          type="password"
          id="password"
          onChange={onChange}
          value={values.password}
          placeholder="Password"
        />

        <Button type="submit"> SIGN UP</Button>
        <Buttons>
          <Link href="/">
            <a href>GO BACK</a>
          </Link>
          <Link href="/landlord/signin">
            <a href>SIGN IN</a>
          </Link>
        </Buttons>
      </Form>
    </Layout>
  );
};

export default Signup;
