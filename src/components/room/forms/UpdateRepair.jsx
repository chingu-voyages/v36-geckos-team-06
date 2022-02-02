/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import { UPDATE_REPAIR } from '../../../../services/mutation';
import { GET_ROOM } from '../../../../services/query';
import {
  ReadOnlyInput,
  Form,
  Button,
  Buttons,
  Container,
  Blur,
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

const UpdateRepair = ({ setUpdateRepair, currentRepair, room }) => {
  const [status, setValue] = useState(currentRepair.status);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const [updateRepair, { loading, error }] = useMutation(UPDATE_REPAIR, {
    refetchQueries: [{ query: GET_ROOM, variables: { roomId: room.id } }],
    onCompleted: () => {
      setUpdateRepair(false);
    },
  });

  return (
    <Container>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          updateRepair({
            variables: {
              // You used id here, the correct var name is updateRepairId
              updateRepairId: currentRepair.id,
              issue: currentRepair.issue,
              details: currentRepair.details,
              status: status,
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
          <ReadOnlyInput name="issue" type="text" placeholder="Issue" value={currentRepair.issue} />
        </label>
        <label htmlFor="description">
          DESCRIPTION
          <TextArea
            readOnly
            name="description"
            type="text"
            placeholder="Description"
            value={currentRepair.details}
            disabled
          />
        </label>
        <label htmlFor="status">
          STATUS
          <StatusDropdown onChange={onChange} name="status" value={status} />
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
