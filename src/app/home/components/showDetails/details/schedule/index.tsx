import React from 'react';
import { ChipsContainer, ScheduleTime, SectionTitle } from '@app/home/screens/showDetails/styles';
import Chip from '@commons/components/chips';
import { Schedule } from '@commons/types/responses/shows';

type Props = {
  schedule: Schedule | undefined;
};

const ScheduleComponent: React.FC<Props> = ({ schedule }: Props) => {
  if (!schedule) {
    return null;
  }

  return (
    <>
      <SectionTitle>Schedule</SectionTitle>
      <ScheduleTime>{schedule.time}</ScheduleTime>
      <ChipsContainer>
        {React.Children.toArray(schedule.days.map((day) => <Chip title={day} big />))}
      </ChipsContainer>
    </>
  );
};

export default ScheduleComponent;
