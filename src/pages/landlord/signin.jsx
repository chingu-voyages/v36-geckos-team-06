import React from 'react';
import Link from 'next/link';
import Layout from '../../components/landlordSignin/Layout';
import { Form, InputContainer, Input, Button, Info } from '../../components/landlordSignin/Form';

const SignIn = () => (
  <Layout>
    <Form>
      <Info>
        <h1>SIGN IN</h1>
        <p>LANDLORD</p>
      </Info>

      <InputContainer>
        <label htmlFor="email">EMAIL ADDRESS</label>
        <Input name="email" type="email" id="email" />
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">PASSWORD</label>
        <Input name="password" type="password" id="password" />
      </InputContainer>
      <Button> Sign In</Button>
      <Link href="/">
        <a href>GO BACK</a>
      </Link>
    </Form>
  </Layout>
);

export default SignIn;
