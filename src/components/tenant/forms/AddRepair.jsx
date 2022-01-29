/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReadOnlyInput, Button, Buttons, Blur, TextArea } from '../../common/FormEl';
import { StatusDropdown } from '../../common/Dropdowns';

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

const UpdateRepair = ({ setCreateRepair }) => {
  const [values, setValue] = useState({
    issue: '',
    description: '',
    status: '',
  });

  const onChange = (event) => {
    setValue({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <Form onSubmit={(e) => e.preventDefault()}>
        <TextContainer>
          <Heading>DETAILS</Heading>
          <RoomNum>ROOM 5</RoomNum>
          <Property>PALM SPRINGS</Property>
        </TextContainer>
        <label htmlFor="issue">
          ISSUE
          <ReadOnlyInput name="issue" type="text" placeholder="Issue" value={values.issue} />
        </label>
        <label htmlFor="description">
          DESCRIPTION
          <TextArea
            readOnly
            name="description"
            type="text"
            placeholder="Description"
            value={values.description}
            disabled
          />
        </label>
        <label htmlFor="status">
          STATUS
          <StatusDropdown onChange={onChange} name="status" value={values.status} />
        </label>
        <Buttons>
          <Button type="submit" background="#491F1E" text="UPDATE" />
          <Button onClick={() => setCreateRepair(false)} background="#242423" text="CANCEL" />
        </Buttons>
      </Form>
      <Blur onClick={() => setCreateRepair(false)} />
    </Container>
  );
};

export default UpdateRepair;
