/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { format } from 'fecha';
import { AvailableDropdown } from '../../common/Dropdowns';
import { UPDATE_ROOM } from '../../../../services/mutation';
import {
  RoomForm,
  CloseButton,
  Container,
  InputContainer,
  Inputs,
  Input,
  Button,
  Buttons,
  Blur,
} from '../../common/FormElements';

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
      <RoomForm
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
        <CloseButton color="white" onClick={() => setEditRoom(false)} />
        <Inputs>
          <InputContainer>
            <label htmlFor="room-number">ROOM NUMBER</label>
            <Input
              name="roomNumber"
              type="number"
              id="room-number"
              value={values.roomNumber}
              onChange={onChange}
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="available">AVAILABLE ?</label>
            <AvailableDropdown
              name="available"
              value={values.available}
              id="available"
              onChange={onChange}
            />
          </InputContainer>
        </Inputs>

        <p>OCCUPANT </p>
        <Inputs>
          <InputContainer>
            <label htmlFor="firstName">FIRST NAME</label>
            <Input
              name="firstName"
              type="text"
              id="firstName"
              value={values.firstName}
              onChange={onChange}
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="lastName">LAST NAME</label>
            <Input
              name="lastName"
              type="text"
              id="lastName"
              value={values.lastName}
              onChange={onChange}
            />
          </InputContainer>
        </Inputs>

        <Inputs>
          <InputContainer>
            <label htmlFor="phoneNumber">PHONE</label>
            <Input
              name="phoneNumber"
              type="text"
              id="phoneNumber"
              value={values.phoneNumber}
              onChange={onChange}
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="email">EMAIL</label>
            <Input name="email" type="email" id="email" value={values.email} onChange={onChange} />
          </InputContainer>
        </Inputs>

        <Inputs>
          <InputContainer>
            <label htmlFor="moveInDate">MOVE IN DATE</label>
            <Input
              name="moveInDate"
              type="date"
              id="moveInDate"
              value={values.moveInDate}
              onChange={onChange}
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="email">MOVE OUT DATE</label>
            <Input
              name="moveOutDate"
              type="date"
              id="moveOutDate"
              value={values.moveOutDate}
              onChange={onChange}
            />
          </InputContainer>
        </Inputs>

        <p>CHARGES </p>
        <Inputs>
          <InputContainer>
            <label htmlFor="parking">PARKING</label>
            <Input
              name="parking"
              type="text"
              id="parking"
              value={values.parking}
              onChange={onChange}
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="electricity">ELECTRICITY</label>
            <Input
              name="electricity"
              type="text"
              id="electricity"
              value={values.electricity}
              onChange={onChange}
            />
          </InputContainer>
        </Inputs>

        <Inputs>
          <InputContainer>
            <label htmlFor="water">WATER</label>
            <Input name="water" type="text" id="water" value={values.water} onChange={onChange} />
          </InputContainer>

          <InputContainer>
            <label htmlFor="rent">RENT</label>
            <Input name="rent" type="text" id="email" value={values.rent} onChange={onChange} />
          </InputContainer>
        </Inputs>

        <Buttons>
          <Button type="submit" background="#a2293a">
            ADD ROOM
          </Button>
          <Button background="#242423" onClick={() => setEditRoom(false)}>
            CANCEL
          </Button>
        </Buttons>
      </RoomForm>
      <Blur onClick={() => setEditRoom(false)} />
    </Container>
  );
};

export default UpdateRoom;
