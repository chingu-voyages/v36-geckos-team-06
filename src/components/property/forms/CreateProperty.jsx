/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CountryDropdown, CategoryDropdown } from '../../common/Dropdowns';
import { CREATE_PROPERTY } from '../../../../services/mutation';
import { GET_LANDLORD } from '../../../../services/query';
import {
  Input,
  Form,
  Button,
  Buttons,
  Container,
  CloseButton,
  Blur,
  Header,
} from '../../common/FormEl';

const CreateProperty = ({ setCreateProperty, landlordID }) => {
  const [values, setValues] = useState({
    name: '',
    address: '',
    postcode: '',
    city: '',
    country: '',
    category: '',
    capacity: '',
  });

  console.log(values);
  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const [createProperty, { loading, error }] = useMutation(CREATE_PROPERTY, {
    refetchQueries: [{ query: GET_LANDLORD, variables: { landlordId: landlordID } }],
    onCompleted: () => {
      setCreateProperty(false);
    },
  });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <Container>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          createProperty({
            variables: {
              ...values,
            },
          });
        }}
      >
        <CloseButton onClick={() => setCreateProperty(false)} />

        <Header text="CREATE PROPERTY" />
        <Input
          placeholder="Property Name"
          name="name"
          type="text"
          value={values.name}
          onChange={onChange}
        />

        <Input
          placeholder="Property Address"
          name="address"
          type="text"
          value={values.address}
          onChange={onChange}
        />

        <Input
          placeholder="City"
          name="city"
          type="text"
          id="city"
          value={values.city}
          onChange={onChange}
        />

        <Input
          placeholder="Postcode"
          name="postcode"
          type="text"
          id="postcode"
          value={values.postcode}
          onChange={onChange}
        />

        <CountryDropdown name="country" id="country" value={values.country} onChange={onChange} />

        <CategoryDropdown
          name="category"
          id="category"
          value={values.category}
          onChange={onChange}
        />

        <Buttons>
          <Button type="submit" background="#a2293a" text="ADD PROPERTY" />
          <Button background="#242423" onClick={() => setCreateProperty(false)} text="CANCEL" />
        </Buttons>
      </Form>
      <Blur onClick={() => setCreateProperty(false)} />
    </Container>
  );
};

export default CreateProperty;
