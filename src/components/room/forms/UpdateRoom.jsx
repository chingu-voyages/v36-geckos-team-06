/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { format } from 'fecha';
import { AvailableDropdown } from '../../common/Dropdowns';
import { UPDATE_ROOM } from '../../../../services/mutation';
import { Input, Form, Inputs, Button, Buttons, Container, Blur, Header } from '../../common/FormEl';

const UpdateRoom = ({ setEditRoom, room }) => {
  const [values, setValues] = useState({
    roomNumber: room.roomNumber,
    water: room.charges.water,
    rent: room.charges.rent,
    electricity: room.charges.electricity,
    parking: room.charges.parking,
    available: room.available,
    firstName: room.occupant.firstName,
    lastName: room.occupant.lastName,
    phoneNumber: room.occupant.phoneNumber,
    email: room.occupant.email,
    moveInDate: format(new Date(room.occupant.moveInDate), 'isoDate'),
    moveOutDate: format(new Date(room.occupant.moveInDate), 'isoDate'),
  });

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const [updateRoom, { loading, error }] = useMutation(UPDATE_ROOM, {
    // refetchQueries: [{ query: GET_PROPERTY, variables: { propertyId: propertyId } }],
    onCompleted: () => {
      setEditRoom(false);
    },
  });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <Container>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          updateRoom({
            variables: {
              updateRoomId: room.id,
              roomNumber: values.roomNumber,
              charges: {
                water: values.water,
                rent: values.rent,
                electricity: values.electricity,
                parking: values.parking,
              },
              available: values.available,
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
          <Button type="submit" background="#a2293a" text="EDIT ROOM" />

          <Button background="#242423" onClick={() => setEditRoom(false)} text="CANCEL" />
        </Buttons>
      </Form>
      <Blur onClick={() => setEditRoom(false)} />
    </Container>
  );
};

export default UpdateRoom;
