import React from 'react';
import styled from 'styled-components';
import resume from '../img/main.jpg';
import PrimaryButton from './PrimaryButton';

const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <div className='leftContent'>
        <img src={resume} alt='' />
      </div>
      <div className='rightContent'>
        <h4>
          I am <span>Sandy</span>
        </h4>
        <p className='paragraph'>
          A fullstack developer proficiency in javascript technologies.
        </p>
        <div className='aboutInfo'>
          <div className='infoTitle'>
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className='info'>
            <p>:Sandip Rijal</p>
            <p>:25</p>
            <p>:Nepalese</p>
            <p>:Nepali, English</p>
            <p>:Kathmandu, Nepal</p>
            <p>:Software Development</p>
          </div>
        </div>
        <PrimaryButton title={'Download cv'} />
      </div>
    </ImageSectionStyled>
  );
};

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  .leftContent {
    width: 100%;
    img {
      width: 80%;
    }
  }

  .rightContent {
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }

    .aboutInfo {
      display: flex;
      .infoTitle {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .infoTitle,
      .info {
        p {
          padding: 0.3rem 0.1rem;
        }
      }
    }
  }
`;

export default ImageSection;
