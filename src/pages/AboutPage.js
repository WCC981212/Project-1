import React from 'react';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
  return (
    <div className='AboutPage'>
      <Title title={'About Me'} span={'About Me'} />
      <ImageSection />
      <Title title={'My Skills'} span={'My Skills'} />
      <div className='skillsContainer'>
        <SkillsSection skill={'HTML'} progress={'90%'} />
        <SkillsSection skill={'CSS'} progress={'60%'} />
        <SkillsSection skill={'Python'} progress={'80%'} />
        <SkillsSection skill={'C++'} progress={'80%'} />
        <SkillsSection skill={'C'} progress={'80%'} />
        <SkillsSection skill={'React JS'} progress={'65%'} />
        <SkillsSection skill={'Node JS'} progress={'40%'} />
        <SkillsSection skill={'PHP'} progress={'70%'} />
        <SkillsSection skill={'VBA'} progress={'80%'} />
      </div>
      <Title title={'Services'} span={'Services'} />
      <div className='services-container'>
        <ServicesSection
          image={design}
          title={'Web design'}
          text={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptasveniam tenetur praesentium impedit aperiam esse. Suscipit aliasvoluptas similique dolorem voluptates quas aspernatur eius adipiscifuga, asperiores laudantium sed labore.'
          }
        />
        <ServicesSection
          image={intelligence}
          title={'Artificial Intelligence'}
          text={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptasveniam tenetur praesentium impedit aperiam esse. Suscipit aliasvoluptas similique dolorem voluptates quas aspernatur eius adipiscifuga, asperiores laudantium sed labore.'
          }
        />
        <ServicesSection
          image={gamedev}
          title={'Game Development'}
          text={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptasveniam tenetur praesentium impedit aperiam esse. Suscipit aliasvoluptas similique dolorem voluptates quas aspernatur eius adipiscifuga, asperiores laudantium sed labore.'
          }
        />
      </div>
    </div>
  );
}

export default AboutPage;
