/* eslint-disable react/prop-types */
import React from 'react';
import { RepairsContainer, RepairsHeading } from '../common/Repairs';
import Repair from '../common/Repair';

const TenantRepair = ({ setCurrentRepair, setUpdateRepair, room }) => {
  const { repairs } = room;

  return (
    <div>
      <RepairsHeading>Repairs</RepairsHeading>
      <RepairsContainer>
        {repairs.map((repair) => (
          <Repair
            key={repair.id}
            room={room}
            repair={repair}
            setCurrentRepair={setCurrentRepair}
            setUpdateRepair={setUpdateRepair}
          />
        ))}
      </RepairsContainer>
    </div>
  );
};

export default TenantRepair;
