/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_REPAIR } from '../../../../services/mutation';
import { GET_ROOM } from '../../../../services/query';
import { Input, Button, Buttons, Blur, TextArea, Container, Form } from '../../common/FormEl';
import { FormHeader } from '../Common/FormHeader';

const UpdateRepair = ({ setUpdateRepair, roomNumber, currentRepair, tenant }) => {
  const [values, setValue] = useState({
    issue: currentRepair.issue,
    details: currentRepair.details,
    status: currentRepair.status,
  });

  console.log(tenant);

  const onChange = (event) => {
    setValue({ ...values, [event.target.name]: event.target.value });
  };

  const [updateRepair, { loading, error }] = useMutation(UPDATE_REPAIR, {
    refetchQueries: [{ query: GET_ROOM, variables: { roomId: tenant.id } }],
    onCompleted: () => {
      setUpdateRepair(false);
    },
  });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <Container>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          updateRepair({
            variables: {
              // You used id here, the correct var name is updateRepairId
              updateRepairId: currentRepair.id,
              issue: values.issue,
              details: values.details,
              status: values.status,
            },
          });
        }}
      >
        <FormHeader roomNumber={roomNumber} property="Palm Springs" />
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
          <Input
            type="text"
            placeholder="status"
            name="status"
            value={values.status}
            disabled="true"
          />
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
