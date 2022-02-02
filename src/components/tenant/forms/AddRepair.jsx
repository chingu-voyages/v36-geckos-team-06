/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Input, Button, Buttons, Blur, TextArea, Container, Form } from '../../common/FormEl';
import { FormHeader } from '../Common/FormHeader';
import { StatusDropdown } from '../../common/Dropdowns';
import { CREATE_REPAIR } from '../../../../services/mutation';
import { GET_ROOM } from '../../../../services/query';

const AddRepair = ({ setCreateRepair, roomNumber }) => {
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
              roomNumber: roomNumber,
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

export default AddRepair;
