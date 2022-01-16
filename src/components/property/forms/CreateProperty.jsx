/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CountryDropdown, CategoryDropdown } from '../../common/Dropdowns';

import { CREATE_PROPERTY } from '../../../../services/mutation';
import { GET_LANDLORD } from '../../../../services/query';
import {
  Form,
  Container,
  InputContainer,
  Inputs,
  Input,
  Button,
  Buttons,
  Blur,
} from '../../common/FormElements';

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
        <InputContainer>
          <label htmlFor="property-name">PROPERTY NAME</label>
          <Input
            name="name"
            type="text"
            id="property-name"
            value={values.name}
            onChange={onChange}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="address">PROPERTY ADDRESS</label>
          <Input
            name="address"
            type="text"
            id="address"
            value={values.address}
            onChange={onChange}
          />
        </InputContainer>

        <Inputs>
          <InputContainer>
            <label htmlFor="city">CITY</label>
            <Input name="city" type="text" id="city" value={values.city} onChange={onChange} />
          </InputContainer>

          <InputContainer>
            <label htmlFor="postcode">POSTCODE</label>
            <Input
              name="postcode"
              type="text"
              id="postcode"
              value={values.postcode}
              onChange={onChange}
            />
          </InputContainer>
        </Inputs>

        <Inputs>
          <InputContainer>
            <label htmlFor="country">COUNTRY</label>
            <CountryDropdown
              name="country"
              id="country"
              value={values.country}
              onChange={onChange}
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="capacity">CAPACITY</label>
            <Input
              name="capacity"
              type="number"
              id="capacity"
              min="1"
              value={values.capacity}
              onChange={onChange}
            />
          </InputContainer>
        </Inputs>

        <InputContainer>
          <label htmlFor="category">CATEGORY</label>
          <CategoryDropdown
            name="category"
            id="category"
            value={values.category}
            onChange={onChange}
          />
        </InputContainer>

        <Buttons>
          <Button type="submit" background="#a2293a">
            ADD PROPERTY
          </Button>
          <Button background="#242423" onClick={() => setCreateProperty(false)}>
            CANCEL
          </Button>
        </Buttons>
      </Form>
      <Blur onClick={() => setCreateProperty(false)} />
    </Container>
  );
};

export default CreateProperty;
