import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ServiceCard from './ServiceCard';
import Title from './Title';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

const ServicesSection = () => {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={'Services'} span={'Services'} />
        <div className='services'>
          <ServiceCard
            image={design}
            title={'Web Design'}
            paragraph={'lorem20'}
          />
          <div className='mid-card'>
            <ServiceCard
              image={intelligence}
              title={'Artificial Intelligence'}
              paragraph={'lorem20'}
            />
          </div>
          <ServiceCard
            image={gamedev}
            title={'Gamedev'}
            paragraph={'lorem20'}
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
};

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    .mid-card {
      margin: 0 1.2rem;
    }
  }
`;

export default ServicesSection;
