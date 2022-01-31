/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { Input, Button, Buttons, Blur, TextArea } from '../../common/FormEl';
import { StatusDropdown } from '../../common/Dropdowns';
import { CREATE_REPAIR } from '../../../../services/mutation';
import { GET_ROOM } from '../../../../services/query';

const Container = styled.section`
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  z-index: 3;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 16px;
  justify-content: center;
  padding: 68px 32px;
  width: 650px;
  box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;
`;

const Heading = styled.h1`
  font-size: 64px;
`;
const RoomNum = styled.p`
  font-weight: 600;
  font-size: 36px;
`;

const Property = styled.p`
  font-size: 13px;
`;

const UpdateRepair = ({ setCreateRepair, roomNumber }) => {
  const [values, setValue] = useState({
    issue: '',
    details: '',
    status: 'ongoing',
  });

  const onChange = (event) => {
    setValue({ ...values, [event.target.name]: event.target.value });
  };

  const [createRepair, { loading, error }] = useMutation(CREATE_REPAIR, {
    refetchQueries: [{ query: GET_ROOM, variables: { roomNumber: roomNumber } }],
    onCompleted: () => {
      setCreateRepair(false);
    },
  });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <Container>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          createRepair({
            variables: {
              issue: values.issue,
              details: values.details,
              status: values.status,
            },
          });
        }}
      >
        <TextContainer>
          <Heading>DETAILS</Heading>
          <RoomNum>ROOM 5</RoomNum>
          <Property>PALM SPRINGS</Property>
        </TextContainer>
        <label htmlFor="issue">
          ISSUE
          <Input
            onChange={onChange}
            name="issue"
            type="text"
            placeholder="Issue"
            value={values.issue}
          />
        </label>
        <label htmlFor="details">
          DESCRIPTION
          <TextArea
            onChange={onChange}
            name="details"
            type="text"
            placeholder="Description"
            value={values.details}
          />
        </label>
        <label htmlFor="status">
          STATUS
          <StatusDropdown onChange={onChange} name="status" value={values.status} />
        </label>
        <Buttons>
          <Button type="submit" background="#491F1E" text="Submit" />
          <Button onClick={() => setCreateRepair(false)} background="#242423" text="CANCEL" />
        </Buttons>
      </Form>
      <Blur onClick={() => setCreateRepair(false)} />
    </Container>
  );
};

export default UpdateRepair;
