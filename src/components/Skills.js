import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Progress from './Progress';
import Title from './Title';

const Skills = () => {
  return (
    <SkillsStyled>
      <Title title={'My  Skills'} span={'My Skills'} />
      <InnerLayout>
        <div className='skills'>
          <Progress title={'HTML5'} width={'70%'} text={'70%'} />
          <Progress title={'CSS3'} width={'50%'} text={'50%'} />
          <Progress title={'JS'} width={'90%'} text={'90%'} />
          <Progress title={'REACT'} width={'80%'} text={'90%'} />
          <Progress title={'NODE'} width={'95%'} text={'90%'} />
          <Progress title={'GRAPHQL'} width={'95%'} text={'95%'} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
};

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;
  }
`;

export default Skills;
