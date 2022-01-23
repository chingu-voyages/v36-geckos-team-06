/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CountryDropdown, CategoryDropdown } from '../../common/Dropdowns';
import { UPDATE_PROPERTY, DELETE_PROPERTY } from '../../../../services/mutation';
import { GET_PROPERTY, GET_LANDLORD } from '../../../../services/query';
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

const UpdateProperty = ({ setUpdateProperty, property }) => {
  const router = useRouter();
  const [values, setValues] = useState({
    name: property.name || '',
    address: property.address || '',
    postcode: property.postcode || '',
    city: property.city || '',
    country: property.country || '',
    category: property.category || '',
    capacity: property.capacity || '',
  });

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const [updateProperty, { loading, error }] = useMutation(UPDATE_PROPERTY, {
    refetchQueries: [{ query: GET_PROPERTY, variables: { propertyId: property.id } }],
    onCompleted: () => {
      setUpdateProperty(false);
    },
  });

  const [deleteProperty] = useMutation(DELETE_PROPERTY, {
    refetchQueries: [{ query: GET_LANDLORD, variables: { landlordId: property.landlord.id } }],
    onCompleted: () => {
      router.push(`/landlord/dashboard`);
    },
  });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <Container>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          updateProperty({
            variables: {
              updatePropertyId: property.id,
              ...values,
            },
          });
        }}
      >
        <CloseButton color="white" onClick={() => setUpdateProperty(false)} />
        <Header text="EDIT PROPERTY" />

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
          <Button type="submit" background="#a2293a" text="EDIT PROPERTY" />
          <Button
            background="#242423"
            onClick={(event) => {
              event.preventDefault();
              deleteProperty({
                variables: {
                  deletePropertyId: property.id,
                },
              });
            }}
            text="DELETE PROPERTY"
          />
        </Buttons>
      </Form>
      <Blur onClick={() => setUpdateProperty(false)} />
    </Container>
  );
};

export default UpdateProperty;
