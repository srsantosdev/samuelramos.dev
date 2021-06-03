import React from 'react';

import { Container, Ball } from './styles';

interface SkillProps {
  name: string;
  level: { completed: boolean }[]
}

const Skill: React.FC<SkillProps> = ({ name, level }) => {
  return (
    <Container>
      <span>{name}</span>

      <div>
        {level.map(({ completed }, index) => (
          <Ball key={index} completed={completed} />
        ))}
      </div>
    </Container>
  )
}

export default Skill;