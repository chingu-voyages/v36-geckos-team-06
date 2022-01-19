/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CountryDropdown, CategoryDropdown } from '../../common/Dropdowns';
import { UPDATE_PROPERTY, DELETE_PROPERTY } from '../../../../services/mutation';
import { GET_PROPERTY, GET_LANDLORD } from '../../../../services/query';
import { Form, Container, Button, Buttons, CloseButton, Blur } from '../../common/FormElements';

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
        <CloseButton onClick={() => setUpdateProperty(false)} />
        <label htmlFor="property-name" style={{ gridArea: 'propertyName' }}>
          PROPERTY NAME
          <input
            name="name"
            type="text"
            id="property-name"
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label htmlFor="address" style={{ gridArea: 'propertyAddress' }}>
          PROPERTY ADDRESS
          <input
            name="address"
            type="text"
            id="address"
            value={values.address}
            onChange={onChange}
          />
        </label>
        <label htmlFor="city" style={{ gridArea: 'city' }}>
          CITY
          <input name="city" type="text" id="city" value={values.city} onChange={onChange} />
        </label>
        <label htmlFor="postcode" style={{ gridArea: 'postcode' }}>
          POSTCODE
          <input
            name="postcode"
            type="text"
            id="postcode"
            value={values.postcode}
            onChange={onChange}
          />
        </label>
        <label htmlFor="country" style={{ gridArea: 'country' }}>
          COUNTRY
          <CountryDropdown name="country" id="country" value={values.country} onChange={onChange} />
        </label>
        <label htmlFor="capacity" style={{ gridArea: 'capacity' }}>
          CAPACITY
          <input
            name="capacity"
            type="number"
            id="capacity"
            min="1"
            value={values.capacity}
            onChange={onChange}
          />
        </label>
        <label htmlFor="category" style={{ gridArea: 'category' }}>
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
            EDIT PROPERTY
          </Button>

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
          >
            {' '}
            DELETE PROPERTY
          </Button>
        </Buttons>
      </Form>
      <Blur onClick={() => setUpdateProperty(false)} />
    </Container>
  );
};

export default UpdateProperty;
