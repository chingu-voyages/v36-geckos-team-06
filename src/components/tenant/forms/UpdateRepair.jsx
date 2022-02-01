/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Input, Button, Buttons, Blur, TextArea, Container, Form } from '../../common/FormEl';
import { FormHeader } from '../Common/FormHeader';
import { StatusDropdown } from '../../common/Dropdowns';

const UpdateRepair = ({ setUpdateRepair, roomNumber, currentRepair }) => {
  const [values, setValue] = useState({
    issue: currentRepair.issue,
    details: currentRepair.details,
    status: currentRepair.status,
  });

  const onChange = (event) => {
    setValue({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <Form>
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
          <Button type="submit" background="#491F1E" text="UPDATE" />
          <Button onClick={() => setUpdateRepair(false)} background="#242423" text="CANCEL" />
        </Buttons>
      </Form>
      <Blur onClick={() => setUpdateRepair(false)} />
    </Container>
  );
};

export default UpdateRepair;
