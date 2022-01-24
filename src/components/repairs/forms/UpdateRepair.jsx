/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Input,
  ReadOnlyInput,
  Form,
  Button,
  Buttons,
  Container,
  Blur,
  Header,
  TextArea,
} from '../../common/FormEl';
import { StatusDropdown } from '../../common/Dropdowns';

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

const UpdateRepair = ({ setUpdateRepair, currentRepair }) => {
  const [values, setStatus] = useState({
    status: currentRepair.status,
    issue: currentRepair.issue,
    description: currentRepair.id,
  });

  const onChange = (event) => {
    setStatus(event.target.value);
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
          <Button onClick={() => setUpdateRepair(false)} background="#242423" text="CANCEL" />
        </Buttons>
      </Form>
      <Blur onClick={() => setUpdateRepair(false)} />
    </Container>
  );
};

export default UpdateRepair;
