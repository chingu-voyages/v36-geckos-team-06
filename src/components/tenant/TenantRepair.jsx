/* eslint-disable react/prop-types */
import React from 'react';
import { RepairsContainer, RepairsHeading } from '../common/Repairs';
import { REPAIR_DATA } from '../../mockData';
import Repair from '../common/Repair';

const TenantRepair = ({ setCurrentRepair, setUpdateRepair }) => {
  const roomOneRepairs = REPAIR_DATA.filter((repair) => repair.room === 'room 1');

  return (
    <div>
      <RepairsHeading>Repairs</RepairsHeading>
      <RepairsContainer>
        {roomOneRepairs.map((repair) => (
          <Repair
            key={repair.id}
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
