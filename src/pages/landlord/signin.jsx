/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, gql, useApolloClient } from '@apollo/client';
import Link from 'next/link';
import Layout from '../../components/common/auth/Layout';
import { Input } from '../../components/common/FormEl';
import { Form, Button, Info, Buttons } from '../../components/common/auth/Form';
import { SIGN_IN_LANDLORD } from '../../../services/mutation';

const SignIn = () => {
  const client = useApolloClient();
  const router = useRouter();
  // set the default state of the form
  const [values, setValues] = useState({
    email: ``,
    password: ``,
  });

  // update the state when a user types in the form
  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const [signInLandlord, { loading, error }] = useMutation(SIGN_IN_LANDLORD, {
    onCompleted: (data) => {
      // store the authenticated landlord in local storage
      localStorage.setItem('authLandlord', JSON.stringify(data.signInLandlord));
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <Layout>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          signInLandlord({
            variables: {
              ...values,
            },
          });
        }}
      >
        <Info>
          <h1>SIGN IN</h1>
          <p>LANDLORD</p>
        </Info>

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
        <Button type="submit"> Sign In</Button>

        <Buttons>
          <Link href="/">
            <a href>GO BACK</a>
          </Link>
          <Link href="/landlord/signup">
            <a href>SIGN UP</a>
          </Link>
        </Buttons>
      </Form>
    </Layout>
  );
};

export default SignIn;
