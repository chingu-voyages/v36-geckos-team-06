/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, gql } from '@apollo/client';
import Link from 'next/link';
import Layout from '../../components/landlordSignin/Layout';
import { Form, InputContainer, Input, Button, Info } from '../../components/landlordSignin/Form';

const SIGN_IN_LANDLORD = gql`
  mutation SignInLandlord($email: String!, $password: String!) {
    signInLandlord(email: $email, password: $password) {
      id
      role
      avatar
      firstName
      jwt
    }
  }
`;

const SignIn = () => {
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
      console.log(data);

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

        <InputContainer>
          <label htmlFor="email">EMAIL ADDRESS</label>
          <Input name="email" type="email" id="email" onChange={onChange} value={values.email} />
        </InputContainer>

        <InputContainer>
          <label htmlFor="password">PASSWORD</label>
          <Input
            name="password"
            type="password"
            id="password"
            onChange={onChange}
            value={values.password}
          />
        </InputContainer>

        <Button type="submit"> Sign In</Button>

        <Link href="/">
          <a href>GO BACK</a>
        </Link>
        <Link href="/landlord/signup">
          <a href>SIGN UP</a>
        </Link>
      </Form>
    </Layout>
  );
};

export default SignIn;
