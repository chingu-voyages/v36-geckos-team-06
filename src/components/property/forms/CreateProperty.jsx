/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CountryDropdown, CategoryDropdown } from '../../common/Dropdowns';
import { CREATE_PROPERTY } from '../../../../services/mutation';
import { GET_LANDLORD } from '../../../../services/query';
import {
  PropertyForm,
  Input,
  Container,
  Button,
  Buttons,
  CloseButton,
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
      <PropertyForm
        onSubmit={(event) => {
          event.preventDefault();
          createProperty({
            variables: {
              ...values,
            },
          });
        }}
      >
        <CloseButton color="white" onClick={() => setCreateProperty(false)} />

        <label style={{ gridArea: 'name' }} htmlFor="property-name">
          PROPERTY NAME
          <Input
            name="name"
            type="text"
            id="property-name"
            value={values.name}
            onChange={onChange}
          />
        </label>

        <label style={{ gridArea: 'address' }} htmlFor="address">
          PROPERTY ADDRESS
          <Input
            name="address"
            type="text"
            id="address"
            value={values.address}
            onChange={onChange}
          />
        </label>

        <label style={{ gridArea: 'city' }} htmlFor="city">
          CITY
          <Input name="city" type="text" id="city" value={values.city} onChange={onChange} />
        </label>

        <label style={{ gridArea: 'postcode' }} htmlFor="postcode">
          POSTCODE
          <Input
            name="postcode"
            type="text"
            id="postcode"
            value={values.postcode}
            onChange={onChange}
          />
        </label>

        <label style={{ gridArea: 'country' }} htmlFor="country">
          COUNTRY
          <CountryDropdown name="country" id="country" value={values.country} onChange={onChange} />
        </label>

        <label style={{ gridArea: 'capacity' }} htmlFor="capacity">
          CAPACITY
          <Input
            name="capacity"
            type="number"
            id="capacity"
            min="1"
            value={values.capacity}
            onChange={onChange}
          />
        </label>

        <label style={{ gridArea: 'category' }} htmlFor="category">
          CATEGORY
          <CategoryDropdown
            name="category"
            id="category"
            value={values.category}
            onChange={onChange}
          />
        </label>
        <Buttons style={{ gridArea: 'buttons' }}>
          <Button type="submit" background="#a2293a">
            ADD PROPERTY
          </Button>
          <Button background="#242423" onClick={() => setCreateProperty(false)}>
            CANCEL
          </Button>
        </Buttons>
      </PropertyForm>
      <Blur onClick={() => setCreateProperty(false)} />
    </Container>
  );
};

export default CreateProperty;
