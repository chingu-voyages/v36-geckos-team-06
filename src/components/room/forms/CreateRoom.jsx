/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_PROPERTY } from '../../../../services/query';
import { AvailableDropdown } from '../../common/Dropdowns';
import { CREATE_ROOM } from '../../../../services/mutation';
import { Input, Form, Inputs, Button, Buttons, Container, Blur, Header } from '../../common/FormEl';

const CreateRoom = ({ setCreateRoom, propertyId }) => {
  const [values, setValues] = useState({
    roomNumber: '',
    water: '',
    rent: '',
    electricity: '',
    parking: '',
    available: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    moveInDate: '',
    moveOutDate: '',
  });

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const [createRoom, { loading, error }] = useMutation(CREATE_ROOM, {
    refetchQueries: [{ query: GET_PROPERTY, variables: { propertyId: propertyId } }],
    onCompleted: () => {
      setCreateRoom(false);
    },
  });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <Container>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          createRoom({
            variables: {
              propertyId: propertyId,
              roomNumber: values.roomNumber,
              charges: {
                water: values.water,
                rent: values.rent,
                electricity: values.electricity,
                parking: values.parking,
              },
              available: values.available || 'yes',
              occupant: {
                firstName: values.firstName,
                lastName: values.lastName,
                phoneNumber: values.phoneNumber,
                email: values.email,
                moveInDate: values.moveInDate,
                moveOutDate: values.moveOutDate,
              },
            },
          });
        }}
      >
        <Header text="CREATE ROOM" />
        <Inputs>
          <Input
            name="roomNumber"
            type="number"
            placeholder="Room Number"
            value={values.roomNumber}
            onChange={onChange}
          />

          <AvailableDropdown
            name="available"
            value={values.available}
            id="available"
            onChange={onChange}
          />
        </Inputs>

        <h5>OCCUPANT</h5>
        <Inputs>
          <Input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={values.firstName}
            onChange={onChange}
          />

          <Input
            name="lastName"
            placeholder="Last Name"
            type="text"
            id="lastName"
            value={values.lastName}
            onChange={onChange}
          />
        </Inputs>

        <Inputs>
          <Input
            name="phoneNumber"
            placeholder="Phone Number"
            type="text"
            value={values.phoneNumber}
            onChange={onChange}
          />

          <Input
            name="email"
            type="email"
            id="email"
            value={values.email}
            onChange={onChange}
            placeholder="Email Address"
          />
        </Inputs>

        <Inputs>
          <label htmlFor="moveInDate">
            MOVE IN DATE
            <Input
              name="moveInDate"
              type="date"
              id="moveInDate"
              value={values.moveInDate}
              onChange={onChange}
            />
          </label>

          <label htmlFor="email">
            MOVE OUT DATE
            <Input
              name="moveOutDate"
              type="date"
              id="moveOutDate"
              value={values.moveOutDate}
              onChange={onChange}
            />
          </label>
        </Inputs>

        <h5>CHARGES</h5>

        <Inputs>
          <Input
            name="parking"
            type="number"
            value={values.parking}
            onChange={onChange}
            placeholder="Parking"
          />

          <Input
            name="electricity"
            type="number"
            value={values.electricity}
            onChange={onChange}
            placeholder="Electricity"
          />
        </Inputs>

        <Inputs>
          <Input
            name="water"
            type="number"
            value={values.water}
            onChange={onChange}
            placeholder="Water"
          />

          <Input
            name="rent"
            type="number"
            value={values.rent}
            onChange={onChange}
            placeholder="Rent"
          />
        </Inputs>

        <Buttons>
          <Button type="submit" background="#a2293a" text="ADD ROOM" />

          <Button background="#242423" onClick={() => setCreateRoom(false)} text="CANCEL" />
        </Buttons>
      </Form>
      <Blur onClick={() => setCreateRoom(false)} />
    </Container>
  );
};

export default CreateRoom;
