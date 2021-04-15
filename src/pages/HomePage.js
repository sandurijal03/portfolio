import React from 'react';
import styled from 'styled-components';
import Particle from '../components/Particle';
import { Facebook, Twitter, GitHub } from '@material-ui/icons';

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className='p-particles-js'>
        <Particle />
      </div>
      <div className='typography'>
        <h1>
          Hi I'm <span>Sandip Rijal</span>
        </h1>
        <p>I am bsc csit graduate, planning to become a fullstack developer.</p>
        <div className='icons'>
          <a href='https://fb.com' className='icon i-facebook' target='__blank'>
            <Facebook />
          </a>
          <div className='icon i-twitter'>
            <Twitter />
          </div>
          <div className='icon i-github'>
            <GitHub />
          </div>
        </div>
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }

        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
    }
  }
`;

export default HomePage;
