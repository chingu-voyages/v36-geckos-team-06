/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_PROPERTY } from '../../../../services/query';
import { AvailableDropdown } from '../../common/Dropdowns';
import { CREATE_ROOM } from '../../../../services/mutation';
import {
  RoomForm,
  Container,
  CloseButton,
  InputContainer,
  Inputs,
  Input,
  Button,
  Buttons,
  Blur,
} from '../../common/FormElements';

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

  console.log(propertyId);

  return (
    <Container>
      <RoomForm
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
        <CloseButton color="white" onClick={() => setCreateRoom(false)} />
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
            <label htmlFor="lastName">FIRST NAME</label>
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
            <label htmlFor="phoneNumber">FIRST NAME</label>
            <Input
              name="phoneNumber"
              type="text"
              id="phoneNumber"
              value={values.phoneNumber}
              onChange={onChange}
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="email">FIRST NAME</label>
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
          <Button background="#242423" onClick={() => setCreateRoom(false)}>
            CANCEL
          </Button>
        </Buttons>
      </RoomForm>
      <Blur onClick={() => setCreateRoom(false)} />
    </Container>
  );
};

export default CreateRoom;
