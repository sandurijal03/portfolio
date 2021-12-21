import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import SmallTitle from './SmallTitle';
import Title from './Title';
import { BusinessCenter, School } from '@material-ui/icons';
import ResumeItem from './ResumeItem';

const Resume = () => {
  const briefCase = <BusinessCenter />;
  const school = <School />;
  return (
    <ResumeStyled>
      <Title title={'Resume'} span={'Resume'} />
      <InnerLayout>
        <div className='smallTitle'>
          <SmallTitle icon={school} title={'Study'} />
        </div>
        <div className='resumeContent'>
          <ResumeItem
            year={'2014 - 2015'}
            title={'High School'}
            subtitle={'Kanchanjunga  English High School'}
            text={'Studied physics, chemistry, math, biology,english,nepali'}
          />
          <ResumeItem
            year={'2016 - Present'}
            title={'Computer Science'}
            subtitle={'Tribhuwan University'}
            text={'Studied physics, chemistry, math, biology,english,nepali'}
          />
        </div>
        <div className='smallTitle uSmallTitleMargin'>
          <SmallTitle icon={briefCase} title={'Working experience'} />
        </div>
        <div className='resumeContent'>
          <ResumeItem
            year={'2014 - 2015'}
            title={'School Teacher'}
            subtitle={'Sigma English School'}
            text={'Taught Math, Science, Optinal Math'}
          />
          <ResumeItem
            year={'2015 - 2016'}
            title={'Computer Operator'}
            subtitle={'Haldibari VDC'}
            text={
              'worked under the village secreteriat regarding computer works'
            }
          />
          <ResumeItem
            year={'2017 - 2019'}
            title={'Technical Support'}
            subtitle={''}
            text={'helps client troubleshooting their network problem'}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
};

const ResumeStyled = styled.section`
  .smallTitle {
    padding-bottom: 3rem;
  }

  .uSmallTitleMargin {
    margin-top: 4rem;
  }

  .resumeContent {
    border-left: 2px solid var(--border-color);
  }
`;

export default Resume;
